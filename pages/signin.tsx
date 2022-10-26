import type { NextPage } from 'next';
import Layout from '../components/Layout';

const SigninPage: NextPage = () => {
  const title = 'Sign In';

  return (
    <Layout title={title}>
      <section>
        <h1 className='text-3xl text-center font-semibold'>{title}</h1>
      </section>
    </Layout>
  );
};
export default SigninPage;
