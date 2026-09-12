import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';

export default defineConfig({
  site: 'https://worawitblog-collab.github.io',
  base: '/my-blog-01',
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeMathjax],
    }),
  },
  integrations: [
    mdx({
      processor: unified({
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeMathjax],
      }),
    }),
  ],
});