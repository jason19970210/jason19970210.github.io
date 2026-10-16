import rss from '@astrojs/rss';
import { site } from '../data/site';
import { allPosts, postPath } from '../lib';

export async function GET(context) {
  const posts = await allPosts();
  return rss({
    title: 'Jason Hsu: Writing',
    description: site.writingIntro,
    site: context.site,
    items: posts.map((p) => ({ title: p.data.title, pubDate: p.data.date, link: postPath(p), categories: [p.data.category, ...p.data.tags] })),
  });
}
