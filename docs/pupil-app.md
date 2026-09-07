# Pupil app: `apps/pupils`

Lives at `pupils.growingmindstutoring.co.uk`. Scaffolded and deployed at launch so Sam starts keeping records in it from her first pupil; grows into the full portal later without a migration.

## 1. Stack

| Concern | Launch | Phase 2 (same interface, swapped implementation) |
|---|---|---|
| Framework | Next.js 15 App Router, TypeScript, Tailwind v4, shared `packages/ui` tokens | same |
| Auth | Supabase Auth, Google provider only | add Classroom read scopes to the same Google login |
| Database | Supabase Postgres, `eu-west-2`, RLS on every table | same |
| Whiteboard | `/pupils/[id]/board` renders the Bitpaper link from `external_links` | embed tldraw (or Excalidraw) with Supabase Realtime sync |
| Video | Meet link from `external_links` | LiveKit room per session, cloud recording via API |
| Recordings | `recordings.storage_kind = 'drive'`, rows hold a Drive link | `storage_kind = 'r2'`, signed URLs from Cloudflare R2 (EU) |
| Classroom | `ClassroomSync` interface, `NoopClassroomSync` implementation | `GoogleClassroomSync` using the Classroom API |
| Email | Resend (session note to parent) | same |
| Hosting | Vercel, functions in `lhr1` | same |

Everything in phase 2 is a new implementation of an interface that already exists at launch. No schema changes are needed for tldraw, LiveKit or R2; the tables already carry the columns.

## 2. Roles and access

- `tutor`: Sam. One account, identified by `TUTOR_EMAIL` env var and a `role` column on `profiles`.
- `parent`: anyone else. Created on first successful sign in **only if** their email already appears in `pupil_guardians.invited_email`. Otherwise the callback signs them out and shows the "ask Sam to add you" page.
- Children never have accounts. There is no `child` role and no route a child could use.

Google is the only provider so parents use the same account as their Classroom. Sign in button must use Google's official asset per their brand terms.

## 3. Schema

`supabase/migrations/0001_init.sql` is the canonical version. Summary:

```
profiles              id (= auth.users.id), email, display_name, role ('tutor'|'parent'), created_at
pupils                id, first_name, year_group ('Reception'|'Year 1'|'Year 2'|'Other'), status ('active'|'paused'|'ended'), started_at, ended_at, created_at
pupil_guardians       pupil_id, invited_email, profile_id (null until first sign in), relationship, created_at
objectives            id, subject, strand, code, description, year_group, sort_order
sessions              id, pupil_id, held_at, duration_min, mode ('online'|'at-mine'|'at-yours'),
                      parent_note, homework, sent_to_parent_at, created_by, created_at
session_objectives    session_id, objective_id, rating ('emerging'|'developing'|'secure')
session_private_notes session_id, note, updated_at              tutor only, separate table by design
consents              id, pupil_id, kind ('whiteboard_audio'|'full_video'), granted_at, withdrawn_at,
                      signed_doc_url, created_at
recordings            id, session_id, kind ('whiteboard'|'video'), storage_kind ('drive'|'r2'),
                      location (Drive URL or R2 key), expires_at, created_at
external_links        pupil_id, kind ('classroom'|'whiteboard'|'video'), url, label
```

Rules encoded in the schema, not just in policy:

- `pupils` has no surname, date of birth or address columns. Do not add them.
- `session_private_notes` is a separate table with a tutor-only policy, so a parent query can never join to it by accident.
- `recordings.expires_at` defaults to `created_at + 12 months`. A scheduled function (Supabase cron) deletes expired rows and, in phase 2, the R2 object.
- `consents` is append-only. Withdrawal sets `withdrawn_at`; nothing is deleted, because the audit trail is the point.
- A recording row cannot be inserted unless the pupil has an active consent of the matching kind (enforced by a trigger).

## 4. Row Level Security

- `profiles`: a user reads their own row. Tutor reads all.
- `pupils`, `sessions`, `session_objectives`, `recordings`, `external_links`, `consents`: parent reads rows where `pupil_id` is in their `pupil_guardians`. Tutor reads and writes all.
- `session_private_notes`: tutor only, read and write.
- `objectives`: readable by any authenticated user, written by migrations only.
- No `anon` access to anything. The marketing site never touches this database.

Helper: `is_tutor()` security definer function checks `profiles.role = 'tutor'` for `auth.uid()`. Every tutor policy uses it.

## 5. Seed data: KS1 objectives

`supabase/seed/objectives.csv`, loaded by `0002_seed_objectives.sql`. Sourced from the National Curriculum programmes of study for Year 1 and Year 2 (maths and English) and phonics phases 2 to 5. Columns: `subject`, `strand`, `code`, `description`, `year_group`, `sort_order`.

Subjects and strands to seed, roughly 120 rows:

- Maths: Number and place value, Addition and subtraction, Multiplication and division, Fractions, Measurement, Geometry (shape, position and direction), Statistics (Year 2)
- Reading: Word reading, Comprehension
- Phonics: Phase 2, Phase 3, Phase 4, Phase 5, Year 1 screening preparation
- Handwriting: Formation, Grip and posture, Size and spacing, Joining
- Writing: Transcription (spelling), Composition, Vocabulary grammar and punctuation

Sam should review the list once and tell us what to add or drop. The `code` column is what she will see in the tick list, so keep it short (`M1.NPV.3`).

## 6. Routes

```
/                          redirect: tutor to /pupils, parent to their single pupil (or a picker if more than one)
/sign-in                   Google button, reassurance line from site.ts, nothing else
/not-yet                   "Ask Sam to add you" page for unknown accounts
/pupils                    tutor: list of pupils with status and last session date
/pupils/new                tutor: first name, year group, guardian email, the three links
/pupils/[id]               parent and tutor: overview, next session, three link tiles, progress summary
/pupils/[id]/sessions      list of sessions, newest first, parent note and homework visible to parents
/pupils/[id]/sessions/new  tutor: date, duration, mode, objectives tick list with rating, parent note, homework, private note, "send note to parent" toggle
/pupils/[id]/progress      objectives grouped by subject and strand, latest rating per objective, simple three colour bar
/pupils/[id]/board         wraps external_links.whiteboard in a full height frame with a fallback "open in new tab"
/pupils/[id]/recordings    list from recordings, Drive links at launch, consent status shown
/pupils/[id]/consent       tutor: record a signed consent, upload the scanned form to Supabase Storage (EU), withdraw
/settings                  tutor: her email, Resend from address, feature flags
```

Every page uses the shared header from `packages/ui` in its restrained density with the pupil app's own three item nav (Overview, Sessions, Progress). Parents never see tutor-only controls; they are gated by `is_tutor()` server side, not hidden with CSS.

## 7. Interfaces stubbed at launch

```ts
// packages/db/src/integrations/classroom.ts
export interface ClassroomSync {
  listCourses(): Promise<{ id: string; name: string }[]>;
  pushAssignment(courseId: string, title: string, description: string, dueAt?: Date): Promise<void>;
  pullGrades(courseId: string): Promise<{ assignmentId: string; grade: number | null }[]>;
}
export class NoopClassroomSync implements ClassroomSync { /* returns empty, logs in dev */ }

// packages/db/src/integrations/recordings.ts
export interface RecordingStore {
  urlFor(recording: Recording): Promise<string>;      // Drive: return location; R2: signed URL, 1 hour
  delete(recording: Recording): Promise<void>;         // Drive: no-op, Sam deletes by hand; R2: delete object
}

// packages/db/src/integrations/video.ts
export interface VideoProvider {
  joinUrl(pupilId: string): Promise<string>;           // launch: external_links.video; phase 2: LiveKit token
}
```

Phase 2 swaps implementations through a single `integrations/index.ts` factory keyed on env vars. Nothing in the UI changes.

## 8. Environment

```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY          server only, used by the sign in callback to check the allow list
TUTOR_EMAIL                        Sam's Google account
RESEND_API_KEY
RESEND_FROM                        notes@growingmindstutoring.co.uk
NEXT_PUBLIC_MARKETING_URL          https://growingmindstutoring.co.uk
PUPIL_APP_ENABLED                  true/false, mirrors site.pupilArea.appEnabled
```

Google Cloud: one OAuth client, consent screen in Testing mode is enough at launch because only allow-listed users sign in. Phase 2 Classroom scopes will require verification; plan a week for that.

## 9. Privacy notice changes this triggers

`handoff/legal-copy.md` names the sub-processors. Add Supabase (database and storage, London region) and note that the pupil area is a sign in with Google that shares only name and email with us. Session notes and objective ratings are "session notes" in the notice already. Recordings language is unchanged.

## 10. Definition of done at launch

- Sam signs in with Google and lands on `/pupils`
- She can add a pupil with a guardian email, log a session with objectives and a parent note, and send the note by email
- A parent on the allow list signs in and sees only their child: sessions, notes, progress, the three links
- An unknown Google account is bounced to `/not-yet` and nothing is created
- RLS proven by a test that a parent's JWT cannot read another pupil, any private note, or any row without a pupil link
- Recording insert without consent fails at the database
- Supabase project is in `eu-west-2`, Vercel functions in `lhr1`
- `PUPIL_APP_ENABLED=false` returns the holding page and the marketing site's sign in link points at Classroom
