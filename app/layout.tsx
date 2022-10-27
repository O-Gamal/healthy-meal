'use client';

import Header from '../components/Header';
import Nav from '../components/Nav';

export interface LayoutProps {
  children: React.ReactNode;
  withSearch?: boolean;
}

const layout = ({ children, withSearch }: LayoutProps) => {
  const user = { name: 'Omar' };

  return (
    <html lang='en'>
      <body>
        <div className='bg-dark-primary min-h-screen text-white'>
          <div className='px-10'>
            <Header withSearch={withSearch} user={user} />
            <section className='relative'>
              {user && <Nav />}
              <div className='mx-auto'>{children}</div>
            </section>
            {/* <Footer /> */}
          </div>
        </div>
      </body>
    </html>
  );
};
export default layout;
