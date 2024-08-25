import React from 'react';

import '@/styles/components/header.scss';

import AmbientBg from '@/components/ambientBg';
import Button from '@/components/buttons/Button';

import Logo from '~/svg/Logo.svg';

const Header: React.FC = () => {
  return (
    <header className="header-outer full-screen-height">
      <AmbientBg />
      <div className="header-title grid-layout">
        <div className="one-col"></div>
        <div className="three-col logo-container">
          <Logo className="full-width" />
        </div>
        <h1 className="seven-col font-rain hero">WeaverWebs</h1>
        <div className="one-col"></div>
      </div>
      <div className="strapline-outer">
        <p className="strapline">We build websites,</p>
        <p className="strapline">We build success</p>
      </div>
      <div className="button-outer">
        <Button variant="gradient" href="/about-us">Find out how</Button>
      </div>
    </header>
  );
};

export default Header;