import { defineType, defineField } from "sanity";

/** A short parent note. Body is Portable Text; everything else matches site.ts. */
export const insight = defineType({
  name: "insight",
  title: "Insight",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "tag",
      title: "Tag",
      type: "string",
      options: { list: ["Phonics", "Maths", "Reading", "Handwriting", "Writing"] },
      validation: (r) => r.required(),
    }),
    defineField({ name: "read", title: "Read time", type: "string", description: "e.g. 4 minute read" }),
    defineField({ name: "blurb", title: "Blurb", type: "text", rows: 3, validation: (r) => r.required() }),
    defineField({ name: "yearGroup", title: "Year group", type: "string", description: "For local search, e.g. Year 1" }),
    defineField({ name: "area", title: "Area", type: "string", initialValue: "Waterlooville" }),
    defineField({ name: "order", title: "Order", type: "number", description: "Lower numbers show first" }),
    defineField({ name: "body", title: "Body", type: "array", of: [{ type: "block" }] }),
  ],
  orderings: [{ title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "title", subtitle: "tag" } },
});
