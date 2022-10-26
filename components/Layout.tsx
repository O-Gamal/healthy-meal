import Head from 'next/head';
import React from 'react';
import Header from './Header';
import Nav from './Nav';

export interface LayoutProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  user?: { name: string };
  withSearch?: boolean;
}

const Layout = ({
  title,
  description,
  children,
  user,
  withSearch,
}: LayoutProps) => {
  return (
    <div className='w-full'>
      <Head>
        <title>{title ? title : 'Healthy Meal'}</title>
        <meta
          name='description'
          content={
            description
              ? description
              : 'Discover high variety of delicious healthy food for all kinds of diet systems, customize your meals according to your preference and available Ingredients, and share your recipes with the world. '
          }
        />
        <link rel='icon' href='/static/img/favicon.svg' />
      </Head>
      <div className='px-10'>
        <Header withSearch={withSearch} user={user} />
        <section className='relative'>
          {user && <Nav />}
          <div className='mx-auto'>{children}</div>
        </section>
        {/* <Footer /> */}
      </div>
    </div>
  );
};
export default Layout;
