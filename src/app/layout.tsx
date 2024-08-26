// src/app/layout.tsx
// Root layout component

import { Metadata } from 'next';
import * as React from 'react';
import '@/styles/styles.scss';

import { siteConfig } from '@/constant/config';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Weaverwebs - Building Websites, Building Success',
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon/favicon2.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}