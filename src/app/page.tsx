// src/app/page.tsx
// Home page component

'use client';

import React, { Suspense } from 'react';
import '@/lib/env';

const HeaderHero = React.lazy(() => import('@/components/headerHero'));
const Footer = React.lazy(() => import('@/components/footer'));

export default function HomePage() {
  return (
    <main>
      <section className="hero bg-black full-screen-height">
        <Suspense fallback={<div>Loading header...</div>}>
          <HeaderHero />
        </Suspense>
        <p>Welcome to Weaverwebs</p>
      </section>
      <Suspense fallback={<div>Loading footer...</div>}>
        <Footer />
      </Suspense>
    </main>
  );
}