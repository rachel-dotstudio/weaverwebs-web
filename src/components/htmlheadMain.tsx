// src/components/CustomHead.js
import Head from 'next/head';
import React from 'react';

const CustomHead = ({
  title = 'Weaverwebs - Building Websites, Building Success',
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Weaverwebs - Building Websites, Building Success"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default CustomHead;
