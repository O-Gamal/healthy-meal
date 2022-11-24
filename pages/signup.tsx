import type { NextPage } from 'next';

import Layout from '../components/Layout';
import SignupCard from '../components/SignupCard';

const SignupPage: NextPage = () => {
  return (
    <Layout title='Sign up'>
      <section className='py-10'>
        <SignupCard />
      </section>
    </Layout>
  );
};
export default SignupPage;
