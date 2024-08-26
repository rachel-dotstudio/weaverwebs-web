// src/app/page.tsx
// Home page component

'use client';

import React, { Suspense } from 'react';
import '@/lib/env';

const HeaderHero = React.lazy(() => import('@/components/headerHero'));
const Footer = React.lazy(() => import('@/components/footer'));

// ErrorBoundary component to handle errors during lazy loading
type ErrorBoundaryProps = {
  children: React.ReactNode;
};

class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught in ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong while loading the component.</div>;
    }

    return this.props.children;
  }
}

export default function HomePage() {
  return (
    <main>
      <section className="hero bg-black full-screen-height">
        <ErrorBoundary>
          <Suspense fallback={<div aria-busy="true" aria-live="polite">Loading header...</div>}>
            <HeaderHero />
          </Suspense>
        </ErrorBoundary>
        <p>Welcome to Weaverwebs</p>
      </section>
      <ErrorBoundary>
        <Suspense fallback={<div aria-busy="true" aria-live="polite">Loading footer...</div>}>
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}