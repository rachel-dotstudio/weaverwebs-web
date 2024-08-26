// src/components/footer.tsx
// Footer component

import * as React from 'react';

import PrimaryLink from './links/PrimaryLink';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Weaverwebs. All rights reserved.</p>
        <PrimaryLink href="/privacy-policy" className="footer-link">
          Privacy Policy
        </PrimaryLink>
      </div>
    </footer>
  );
};


export default Footer;
