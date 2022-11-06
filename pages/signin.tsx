import type { NextPage } from 'next';
import Layout from '../components/Layout';
import SigninCard from '../components/SigninCard';

const SigninPage: NextPage = () => {
  const obj = {
    name: 'omar',
    gender: {
      x: 'Male',
      y: 'Female',
    },
  };

  const str = JSON.stringify(obj, ['name'], 4);
  console.log(str);
  console.log(new Number(3));

  return (
    <Layout title='Sign In'>
      <SigninCard />
    </Layout>
  );
};
export default SigninPage;
