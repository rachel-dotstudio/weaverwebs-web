import * as React from 'react';

import PrimaryLink from './links/PrimaryLink';

export const Footer = () => {
  return (
    <footer className="weaverwebs-footer">
      © {new Date().getFullYear()} By{' '}
      <PrimaryLink href="https://weaverwebs.com">Weaverwebs.com</PrimaryLink>
    </footer>
  );
};

export default Footer;
