// src/app/about-us/page.tsx
// AboutUs page component

'use client';

import React, { useEffect } from 'react';

const AboutUs: React.FC = () => {
  useEffect(() => {
    // Example of a passive event listener
    const handleScroll = () => {
      console.log('User is scrolling');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="about-us-page">
      <h1>About Us</h1>
      <p>Welcome to WeaverWebs! We are dedicated to building websites that drive success for our clients.</p>
      <p>Our mission is to create visually appealing, high-performance websites tailored to your business needs.</p>
    </div>
  );
};

export default AboutUs;