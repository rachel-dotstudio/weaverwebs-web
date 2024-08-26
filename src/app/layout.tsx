// src/app/layout.tsx
// Root layout component

import { Metadata } from 'next';
import * as React from 'react';
import '@/styles/styles.scss';

import { siteConfig } from '@/constant/config';

// Define your metadata
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Weaverwebs - Building Websites, Building Success',
    template: `%s | ${siteConfig.title}`,
  },
  description: 'Weaverwebs specializes in creating high-quality, user-friendly websites to help your business succeed online. Learn more about our services today.',
};

// Define viewport settings
export const generateViewport = () => ({
  width: 'device-width',
  initialScale: 1,
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Meta tags can be added directly here if needed */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Weaverwebs specializes in creating high-quality, user-friendly websites to help your business succeed online. Learn more about our services today." />
        {/* Additional metadata tags can be added as needed */}
      </head>
      <body>{children}</body>
    </html>
  );
}