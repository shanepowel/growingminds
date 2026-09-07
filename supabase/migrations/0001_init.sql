-- Growing Minds Tutoring pupil app: initial schema.
-- Data minimisation is enforced here: no surnames, no dates of birth, no addresses.

create extension if not exists "pgcrypto";

-- Roles -------------------------------------------------------------------

create table public.profiles (
  id            uuid primary key references auth.users (id) on delete cascade,
  email         text not null unique,
  display_name  text,
  role          text not null default 'parent' check (role in ('tutor', 'parent')),
  created_at    timestamptz not null default now()
);

create or replace function public.is_tutor()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'tutor'
  );
$$;

-- Pupils -----------------------------------------------------------------

create table public.pupils (
  id          uuid primary key default gen_random_uuid(),
  first_name  text not null check (char_length(first_name) between 1 and 40),
  year_group  text not null check (year_group in ('Reception', 'Year 1', 'Year 2', 'Other')),
  status      text not null default 'active' check (status in ('active', 'paused', 'ended')),
  started_at  date not null default current_date,
  ended_at    date,
  created_at  timestamptz not null default now()
);

create table public.pupil_guardians (
  pupil_id       uuid not null references public.pupils (id) on delete cascade,
  invited_email  text not null,
  profile_id     uuid references public.profiles (id) on delete set null,
  relationship   text,
  created_at     timestamptz not null default now(),
  primary key (pupil_id, invited_email)
);
create index on public.pupil_guardians (profile_id);
create index on public.pupil_guardians (lower(invited_email));

-- Parent access helper: pupils the current user is a guardian of.
create or replace function public.my_pupil_ids()
returns setof uuid
language sql
stable
security definer
set search_path = public
as $$
  select pupil_id from public.pupil_guardians where profile_id = auth.uid();
$$;

-- Objectives (seeded, read only) ------------------------------------------

create table public.objectives (
  id           uuid primary key default gen_random_uuid(),
  subject      text not null,
  strand       text not null,
  code         text not null unique,
  description  text not null,
  year_group   text not null check (year_group in ('Reception', 'Year 1', 'Year 2')),
  sort_order   integer not null default 0
);

-- Sessions ---------------------------------------------------------------

create table public.sessions (
  id                 uuid primary key default gen_random_uuid(),
  pupil_id           uuid not null references public.pupils (id) on delete cascade,
  held_at            timestamptz not null,
  duration_min       integer not null check (duration_min between 15 and 120),
  mode               text not null check (mode in ('online', 'at-mine', 'at-yours')),
  parent_note        text,
  homework           text,
  sent_to_parent_at  timestamptz,
  created_by         uuid references public.profiles (id),
  created_at         timestamptz not null default now()
);
create index on public.sessions (pupil_id, held_at desc);

create table public.session_objectives (
  session_id    uuid not null references public.sessions (id) on delete cascade,
  objective_id  uuid not null references public.objectives (id),
  rating        text not null check (rating in ('emerging', 'developing', 'secure')),
  primary key (session_id, objective_id)
);

-- Separate table on purpose: parents must never be able to join to this.
create table public.session_private_notes (
  session_id  uuid primary key references public.sessions (id) on delete cascade,
  note        text not null,
  updated_at  timestamptz not null default now()
);

-- Consent and recordings ---------------------------------------------------

create table public.consents (
  id              uuid primary key default gen_random_uuid(),
  pupil_id        uuid not null references public.pupils (id) on delete cascade,
  kind            text not null check (kind in ('whiteboard_audio', 'full_video')),
  granted_at      date not null default current_date,
  withdrawn_at    date,
  signed_doc_url  text,
  created_at      timestamptz not null default now()
);
create index on public.consents (pupil_id, kind);

create table public.recordings (
  id            uuid primary key default gen_random_uuid(),
  session_id    uuid not null references public.sessions (id) on delete cascade,
  kind          text not null check (kind in ('whiteboard', 'video')),
  storage_kind  text not null default 'drive' check (storage_kind in ('drive', 'r2')),
  location      text not null,
  expires_at    timestamptz not null default (now() + interval '12 months'),
  created_at    timestamptz not null default now()
);

-- A recording cannot exist without a live consent of the matching kind.
create or replace function public.enforce_recording_consent()
returns trigger
language plpgsql
as $$
declare
  v_pupil uuid;
  v_kind  text;
begin
  select pupil_id into v_pupil from public.sessions where id = new.session_id;
  v_kind := case new.kind when 'whiteboard' then 'whiteboard_audio' else 'full_video' end;
  if not exists (
    select 1 from public.consents
    where pupil_id = v_pupil and kind = v_kind and withdrawn_at is null
  ) then
    raise exception 'No active % consent for this pupil', v_kind;
  end if;
  return new;
end;
$$;

create trigger recordings_require_consent
  before insert on public.recordings
  for each row execute function public.enforce_recording_consent();

-- Links to the tools we are not rebuilding yet ------------------------------

create table public.external_links (
  pupil_id  uuid not null references public.pupils (id) on delete cascade,
  kind      text not null check (kind in ('classroom', 'whiteboard', 'video')),
  url       text not null,
  label     text,
  primary key (pupil_id, kind)
);

-- Row Level Security -------------------------------------------------------

alter table public.profiles              enable row level security;
alter table public.pupils                enable row level security;
alter table public.pupil_guardians       enable row level security;
alter table public.objectives            enable row level security;
alter table public.sessions              enable row level security;
alter table public.session_objectives    enable row level security;
alter table public.session_private_notes enable row level security;
alter table public.consents              enable row level security;
alter table public.recordings            enable row level security;
alter table public.external_links        enable row level security;

-- profiles
create policy profiles_self_read   on public.profiles for select using (id = auth.uid() or public.is_tutor());
create policy profiles_tutor_write on public.profiles for all    using (public.is_tutor()) with check (public.is_tutor());

-- objectives: any signed in user reads, nobody writes through the API
create policy objectives_read on public.objectives for select using (auth.uid() is not null);

-- pupils and children of pupils: parent reads own, tutor does everything
create policy pupils_parent_read  on public.pupils for select using (id in (select public.my_pupil_ids()));
create policy pupils_tutor_all    on public.pupils for all    using (public.is_tutor()) with check (public.is_tutor());

create policy guardians_parent_read on public.pupil_guardians for select using (profile_id = auth.uid());
create policy guardians_tutor_all   on public.pupil_guardians for all    using (public.is_tutor()) with check (public.is_tutor());

create policy sessions_parent_read on public.sessions for select using (pupil_id in (select public.my_pupil_ids()));
create policy sessions_tutor_all   on public.sessions for all    using (public.is_tutor()) with check (public.is_tutor());

create policy session_objectives_parent_read on public.session_objectives for select
  using (session_id in (select id from public.sessions where pupil_id in (select public.my_pupil_ids())));
create policy session_objectives_tutor_all on public.session_objectives for all
  using (public.is_tutor()) with check (public.is_tutor());

-- private notes: tutor only, no parent policy at all
create policy private_notes_tutor_all on public.session_private_notes for all
  using (public.is_tutor()) with check (public.is_tutor());

create policy consents_parent_read on public.consents for select using (pupil_id in (select public.my_pupil_ids()));
create policy consents_tutor_all   on public.consents for all    using (public.is_tutor()) with check (public.is_tutor());

create policy recordings_parent_read on public.recordings for select
  using (session_id in (select id from public.sessions where pupil_id in (select public.my_pupil_ids())));
create policy recordings_tutor_all on public.recordings for all
  using (public.is_tutor()) with check (public.is_tutor());

create policy links_parent_read on public.external_links for select using (pupil_id in (select public.my_pupil_ids()));
create policy links_tutor_all   on public.external_links for all    using (public.is_tutor()) with check (public.is_tutor());

-- No grants to anon. The marketing site never touches this database.
revoke all on all tables in schema public from anon;

-- Retention: delete expired recordings nightly (Supabase cron, enabled in dashboard).
-- select cron.schedule('purge-recordings', '0 3 * * *', $$delete from public.recordings where expires_at < now()$$);
