import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://bhaktiudyan.com/sitemap.ts',
  };
}
