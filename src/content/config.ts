import { defineCollection, z } from "astro:content";

const category = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: () =>
    z.object({
      category: z.string(),
      url: z.string(),
      count: z.number(),
    })
});

const posts = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subTitle: z.string().optional().default(""),
      /** To override utteranc.es lookup string */
      commentsKeyOverride: z.string().optional(),
      // Transform string to Date object
      // date: z.coerce.date(),
      // modified: z.coerce.date().optional(),
      draft: z.boolean().optional(),

      date: z.coerce.string().optional(),
      modified: z.coerce.string().optional(),
      cover: image().optional(), // z.string().optional(),
      cover_full_width: image().optional(),
      cover_mobile: image().optional(),
      // cover_tablet: image().optional(),
      // cover_desktop: image().optional(),
      cover_icon: image().optional(),
      
      category: z.string().optional(),
      subCategory: z.string().optional(),

      tags: z.array(z.string()).optional(),

      popularity: z.number().min(0).max(1.0).optional(),
      // `related` is a list of post slugs
      related: z.array(z.string()).optional(),

    }),
});

export const collections = { posts, category };
