import type { NextPage } from 'next';
import Layout from '../components/Layout';
import SigninCard from '../components/SigninCard';

const SigninPage: NextPage = () => {
  return (
    <Layout title='Sign In'>
      <SigninCard />
    </Layout>
  );
};
export default SigninPage;
