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
};

// Define viewport settings
export const generateViewport = () => ({
  width: 'device-width',
  initialScale: 1,
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}