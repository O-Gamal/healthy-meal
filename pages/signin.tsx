import type { NextPage } from 'next';
import Layout from '../components/Layout';
import SigninCard from '../components/SigninCard';

const SigninPage: NextPage = () => {
  return (
    <Layout title='Sign In'>
      <section className='py-10'>
        <SigninCard />
      </section>
    </Layout>
  );
};
export default SigninPage;
