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
  content_blocks: z.array(z.any()).optional(),
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


const metadataDefinition = () =>
  z
    .object({
      title: z.string().optional(),
      ignoreTitleTemplate: z.boolean().optional(),

      canonical: z.string().url().optional(),

      robots: z
        .object({
          index: z.boolean().optional(),
          follow: z.boolean().optional(),
        })
        .optional(),

      description: z.string().optional(),

      openGraph: z
        .object({
          url: z.string().optional(),
          siteName: z.string().optional(),
          images: z
            .array(
              z.object({
                url: z.string(),
                width: z.number().optional(),
                height: z.number().optional(),
              })
            )
            .optional(),
          locale: z.string().optional(),
          type: z.string().optional(),
        })
        .optional(),

      twitter: z
        .object({
          handle: z.string().optional(),
          site: z.string().optional(),
          cardType: z.string().optional(),
        })
        .optional(),
    })
    .optional();

const postCollection = defineCollection({
  schema: z.object({
    publishDate: z.date(),
    title: z.string(),
    excerpt: z.string(),
    tags: z.array(z.string()),
    author: z.string(),
    
    image: z.string(),
    image_alt: z.string(),
    
    seo: seoSchema,
    draft: z.boolean(),
    featured: z.boolean(),
  }),
});

const ebookCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    image_alt: z.string(),
    bulletPoints: z.array(z.string()),
    whatsInsideDescription: z.string(),
  }),
});

export const collections = {
  ebook: ebookCollection,
  post: postCollection,
  pages: pagesCollection,
};
