// src/app/error.tsx
// Error page component

'use client';

import React from 'react';

export default function ErrorPage({ error }: { error: Error }) {
  console.error(error);

  return (
    <main>
      <h1>500 - Server-side error occurred</h1>
      <p>Something went wrong. Please try again later.</p>
    </main>
  );
}