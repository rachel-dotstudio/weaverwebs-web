// src/components/layout.tsx
// Layout component

import * as React from 'react';

import '@/styles/styles.scss';

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
