import type { NextPage } from 'next';

import Layout from '../components/Layout';
import SignupCard from '../components/SignupCard';

const SignupPage: NextPage = () => {
  return (
    <Layout title='Sign up'>
      <SignupCard />
    </Layout>
  );
};
export default SignupPage;
