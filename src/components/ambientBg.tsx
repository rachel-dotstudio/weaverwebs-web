// src/components/AmbientBackground.tsx
// AmbientBackground component

import React from 'react';

import '@/styles/components/ambientbg.scss';

const AmbientBackground = () => {
  return (
    <div className="ambient glow-content-display">
      <div className="glow-ambient">
        <div className="first-shape-ambient"></div>
        <div className="second-shape-ambient"></div>
      </div>
    </div>
  );
};

export default AmbientBackground;
