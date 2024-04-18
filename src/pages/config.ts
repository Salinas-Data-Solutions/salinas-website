import { defineCollection, z } from "astro:content";

const seoSchema = z
  .object({
    page_description: z.string().nullable(),
    canonical_url: z.string().nullable(),
    featured_image: z.string().nullable(),
    featured_image_alt: z.string().nullable(),
    author_twitter_handle: z.string().nullable(),
    open_graph_type: z.string().nullable(),
    no_index: z.boolean(),
  })
  .optional();


const pageSchema = z.object({
  _schema: z.any().optional(),
  hidden: z.boolean().optional().default(false),
  title: z.string(),
  content_blocks: z.array(z.any()),
  page_size: z.undefined(),
  description: z.undefined(),
  seo: seoSchema,
});

const paginatedCollectionSchema = z.object({
  _schema: z.literal("paginated_collection"),
  hidden: z.literal(true).optional().default(true),
  title: z.string(),
  description: z.string().optional(),
  page_size: z.number().positive(),
  content_blocks: z.undefined(),
  seo: seoSchema,
});

const pagesCollection = defineCollection({
  schema: z.union([paginatedCollectionSchema, pageSchema]),
});

export const collections = {
  pages: pagesCollection,
};