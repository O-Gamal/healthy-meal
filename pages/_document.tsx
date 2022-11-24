import type { NextPage } from 'next';
import { Head, Html, Main, NextScript } from 'next/document';

const Document: NextPage = () => {
  return (
    <Html>
      <Head />
      <body className='bg-dark-primary min-h-screen text-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};
export default Document;
