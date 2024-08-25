//page.tsx is the index page of the app

'use client';

import React from 'react';
import '@/lib/env';

import Footer from '@/components/footer';
import HeaderHero from '@/components/headerHero';

export default function HomePage() {
  return (
    <main>
      <section className="hero bg-black full-screen-height">
        <HeaderHero />
        <p>TEST</p>
      </section>
      <Footer />
    </main>
  );
}
