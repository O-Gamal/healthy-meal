import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import Nav from './Nav';

export interface LayoutProps {
    title?: string;
    description?: string;
    children: React.ReactNode
}

const Layout = ({ title, description, children }: LayoutProps) => {
    return (
        <div className='w-full'>
            <Head>
                <title>{title ? title : 'Healthy Meal'}</title>
                <meta name="description" content={description ? description : 'Discover high variety of delicious healthy food for all kinds of diet systems, customize your meals according to your preference and available Ingredients, and share your recipes with the world. '} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='w-full px-36 mx-auto'>
                <Nav />
                {children}
                <Footer />
            </div>
        </div>
    )
}
export default Layout