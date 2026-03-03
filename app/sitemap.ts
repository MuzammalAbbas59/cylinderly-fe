import type { MetadataRoute } from 'next';
import { APP_CONFIG } from '@/lib/config';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: APP_CONFIG.url,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${APP_CONFIG.url}/how-it-works`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${APP_CONFIG.url}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${APP_CONFIG.url}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${APP_CONFIG.url}/vendor/register`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];
}
