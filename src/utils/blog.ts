import type { PaginateFunction } from 'astro';
import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import type { Post } from '~/types';
import { APP_BLOG } from 'astrowind:config';
import { cleanSlug, trimSlash, BLOG_BASE, POST_PERMALINK_PATTERN, CATEGORY_BASE, TAG_BASE } from './permalinks';

export const generatePermalink = async ({ id, slug, publishDate }: { id: string; slug: string; publishDate?: Date }) => {
  const year = String(publishDate?.getFullYear()).padStart(4, '0');
  const month = String(publishDate?.getMonth() || 0 + 1).padStart(2, '0');
  const day = String(publishDate?.getDate()).padStart(2, '0');
  const hour = String(publishDate?.getHours()).padStart(2, '0');
  const minute = String(publishDate?.getMinutes()).padStart(2, '0');
  const second = String(publishDate?.getSeconds()).padStart(2, '0');

  const permalink = POST_PERMALINK_PATTERN.replace('%slug%', slug)
    .replace('%id%', id)
    .replace('%year%', year)
    .replace('%month%', month)
    .replace('%day%', day)
    .replace('%hour%', hour)
    .replace('%minute%', minute)
    .replace('%second%', second);

  return permalink
    .split('/')
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join('/');
};

const getNormalizedPost = async (post: CollectionEntry<'post'>): Promise<Post> => {
  const { id, slug: rawSlug = '', data } = post;
  const { Content, remarkPluginFrontmatter } = await post.render();

  const {
    publishDate: rawPublishDate = new Date(),
    title,
    excerpt,
    image,
    tags: rawTags = [],
    author,
    draft = false,
  } = data;

  const slug = cleanSlug(rawSlug);
  const publishDate = new Date(rawPublishDate);
  const tags = rawTags.map((tag: string) => ({
    slug: cleanSlug(tag),
    title: tag,
  }));

  return {
    id: id,
    slug: slug,
    permalink: await generatePermalink({ id, slug, publishDate }),

    publishDate: publishDate,

    title: title,
    excerpt: excerpt,
    image: image,

    tags: tags,
    author: author,

    draft: draft,

    Content: Content,

    readingTime: remarkPluginFrontmatter?.readingTime,
  };
};

const load = async function ({ locale, featured = false }): Promise<Array<Post>> {
  const posts = await getCollection('post', ({ slug }) => slug?.startsWith(locale));
  const normalizedPosts = posts.map(async (post) => await getNormalizedPost(post));

  const results = (await Promise.all(normalizedPosts))
    .sort((a, b) => b.publishDate.valueOf() - a.publishDate.valueOf())
    .filter((post) => !post.draft);

  return results;
};

const loadEbooks = async function ({ locale, featured = false }) {
  const ebooks = await getCollection('ebook', ({ slug }) => slug?.startsWith(locale));
  
  const normalizedEbooks = ebooks.map(async (ebook) => {
    return {
      permalink: await generatePermalink({ id: ebook.id, slug: ebook.slug }),
      title: ebook.data.title,
      description: ebook.data.description,
      featured: ebook.data.featured,
      image: ebook.data.image,
      image_alt: ebook.data.image_alt,
      bulletPoints: ebook.data.bulletPoints,
      whatsInsideDescription: ebook.data.whatsInsideDescription,
      whatsInsideImage: ebook.data.whatsInsideImage,
      formEmbedCode: ebook.data.formEmbedCode,
      slug: cleanSlug(ebook.slug),
    };
  });

  const results = await Promise.all(normalizedEbooks);
  return results;
};

let _posts: Array<Post>;
let _ebooks;

export const isBlogEnabled = APP_BLOG.isEnabled;
export const isRelatedPostsEnabled = APP_BLOG.isRelatedPostsEnabled;
export const isBlogListRouteEnabled = APP_BLOG.list.isEnabled;
export const isBlogPostRouteEnabled = APP_BLOG.post.isEnabled;
export const isBlogCategoryRouteEnabled = APP_BLOG.category.isEnabled;
export const isBlogTagRouteEnabled = APP_BLOG.tag.isEnabled;

export const blogListRobots = APP_BLOG.list.robots;
export const blogPostRobots = APP_BLOG.post.robots;
export const blogCategoryRobots = APP_BLOG.category.robots;
export const blogTagRobots = APP_BLOG.tag.robots;

export const blogPostsPerPage = APP_BLOG?.postsPerPage;

export const fetchPosts = async ({ locale }): Promise<Array<Post>> => {
  if (!_posts) {
    _posts = await load({ locale });
  } else if (!_posts?.[0]?.slug?.startsWith(locale)) {
    _posts = await load({ locale });
  }

  return _posts;
};

export const fetchEbooks = async ({ locale }): Promise<Array<{
  permalink: string;
  title: string;
  description: string;
  featured: boolean;
  image: string;
  image_alt: string;
  bulletPoints: Array<string>;
  whatsInsideDescription: string;
  whatsInsideImage: string;
  formEmbedCode: string;
  slug: string;
}>> => {
  if (!_ebooks) {
    _ebooks = await loadEbooks({ locale });
  } else if (!_ebooks?.[0]?.slug?.startsWith(locale)) {
    _ebooks = await loadEbooks({ locale });
  }

  return _ebooks;
};

export const findPostsBySlugs = async (slugs: Array<string>, locale): Promise<Array<Post>> => {
  if (!Array.isArray(slugs)) return [];

  const posts = await fetchPosts({ locale });

  return slugs.reduce((r: Array<Post>, slug: string) => {
    posts.some((post: Post) => slug === post.slug && r.push(post));
    return r;
  }, []);
};

export const findPostsByIds = async (ids: Array<string>, locale): Promise<Array<Post>> => {
  if (!Array.isArray(ids)) return [];

  const posts = await fetchPosts({ locale });

  return ids.reduce((r: Array<Post>, id: string) => {
    posts.some((post: Post) => id === post.id && r.push(post));
    return r;
  }, []);
};

export const findLatestPosts = async ({ count }: { count?: number }, locale): Promise<Array<Post>> => {
  const _count = count || 4;
  const posts = await fetchPosts({ locale });

  return posts ? posts.slice(0, _count) : [];
};

export const getStaticPathsBlogList = async ({ paginate, locale }: { paginate: PaginateFunction; locale: string }) => {
  if (!isBlogEnabled || !isBlogListRouteEnabled) return [];
  
  return paginate(await fetchPosts({ locale }), {
    params: { blog: BLOG_BASE || undefined },
    pageSize: blogPostsPerPage,
  });
};

export const getStaticPathsBlogPost = async ({ locale }) => {
  if (!isBlogEnabled || !isBlogPostRouteEnabled) return [];
  return (await fetchPosts({ locale })).flatMap((post) => ({
    params: {
      slug: post.permalink,
    },
    props: { post },
  }));
};

export const getStaticPathsEbooks = async ({ locale }) => {
  return (await fetchEbooks({ locale })).flatMap((ebook) => ({
    params: {
      slug: ebook.permalink,
    },
    props: { ebook },
  }));
};

export const getStaticPathsBlogCategory = async ({
  paginate,
  locale,
}: {
  paginate: PaginateFunction;
  locale: string;
}) => {
  if (!isBlogEnabled || !isBlogCategoryRouteEnabled) return [];

  const posts = await fetchPosts({ locale });
  const categories = {};
  posts.map((post) => {
    post.category?.slug && (categories[post.category?.slug] = post.category);
  });

  return Array.from(Object.keys(categories)).flatMap((categorySlug) =>
    paginate(
      posts.filter((post) => post.category?.slug && categorySlug === post.category?.slug),
      {
        params: { category: categorySlug, blog: CATEGORY_BASE || undefined },
        pageSize: blogPostsPerPage,
        props: { category: categories[categorySlug] },
      }
    )
  );
};

export const getStaticPathsBlogTag = async ({ paginate, locale }: { paginate: PaginateFunction; locale: string }) => {
  const posts = await fetchPosts({ locale });
  const tags = {};
  posts.map((post) => {
    Array.isArray(post.tags) &&
      post.tags.map((tag) => {
        tags[tag?.slug] = tag;
      });
  });

  return Array.from(Object.keys(tags)).flatMap((tagSlug) =>
    paginate(
      posts.filter((post) => Array.isArray(post.tags) && post.tags.find((elem) => elem.slug === tagSlug)),
      {
        params: { tag: tagSlug, blog: TAG_BASE || undefined },
        pageSize: blogPostsPerPage,
        props: { tag: tags[tagSlug] },
      }
    )
  );
};

export async function getRelatedPosts(originalPost: Post, maxResults: number = 4, locale): Promise<Post[]> {
  const allPosts = await fetchPosts({ locale });
  const originalTagsSet = new Set(originalPost.tags ? originalPost.tags.map((tag) => tag.slug) : []);

  const postsWithScores = allPosts.reduce((acc: { post: Post; score: number }[], iteratedPost: Post) => {
    if (iteratedPost.slug === originalPost.slug) return acc;

    let score = 0;
    if (iteratedPost.category && originalPost.category && iteratedPost.category.slug === originalPost.category.slug) {
      score += 5;
    }

    if (iteratedPost.tags) {
      iteratedPost.tags.forEach((tag) => {
        if (originalTagsSet.has(tag.slug)) {
          score += 1;
        }
      });
    }

    acc.push({ post: iteratedPost, score });
    return acc;
  }, []);

  postsWithScores.sort((a, b) => b.score - a.score);

  const selectedPosts: Post[] = [];
  let i = 0;
  while (selectedPosts.length < maxResults && i < postsWithScores.length) {
    selectedPosts.push(postsWithScores[i].post);
    i++;
  }

  return selectedPosts;
}
