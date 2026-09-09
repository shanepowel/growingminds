import { site } from "@/content/site";

export const dynamic = "force-static";

/**
 * llms.txt (https://llmstxt.org/): a short, structured Markdown summary for
 * language models. Generated from content/site.ts so it never drifts from
 * the pages themselves.
 */
export function GET() {
  const base = `https://${site.business.domain}`;

  const lines = [
    `# ${site.business.name}`,
    "",
    `> ${site.business.tagline}.`,
    "",
    `${site.tutor.name} is a ${site.tutor.role.toLowerCase()} with over ${site.tutor.yearsExperience} years' experience in Key Stage 1, tutoring Reception, Year 1 and Year 2 children (roughly ages 4 to 7) in ${site.subjects.map((s) => s.title.toLowerCase()).join(", ")}. Sessions run online and face to face across Portsmouth and nearby areas: ${site.business.areasCovered.join(", ")}. ${site.business.dbsLine}`,
    "",
    "## Pages",
    `- [Home](${base}/): Overview, trust signals and how to get in touch.`,
    `- [Curriculum](${base}/curriculum): How a session works, and the subjects taught.`,
    `- [Costs](${base}/costs): Pricing and policies for travel, cancellations and payment.`,
    `- [Insights](${base}/insights): Short, practical notes for parents of KS1 children.`,
    `- [About](${base}/about): ${site.tutor.name}'s background, qualifications and safeguarding.`,
    `- [Tutoring in Portsmouth](${base}/tutoring-portsmouth): Local service area detail.`,
    `- [FAQs](${base}/faqs): Answers to common questions from parents.`,
    `- [Pupil area](${base}/pupil-area): Sign in details for current families.`,
    `- [Contact](${base}/contact): Enquiry form and direct contact details.`,
    "",
    "## Policies",
    `- [Privacy notice](${base}/policies?tab=privacy)`,
    `- [Tutoring terms](${base}/policies?tab=terms)`,
    "",
    `Contact: ${site.business.email}`,
  ];

  return new Response(lines.join("\n") + "\n", {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
