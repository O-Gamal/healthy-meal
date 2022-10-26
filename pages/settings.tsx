import type { NextPage } from 'next';
import Layout from '../components/Layout';

const SettingsPage: NextPage = () => {
  return (
    <Layout user={{ name: 'Omar' }}>
      <div>SettingsPage</div>
    </Layout>
  );
};
export default SettingsPage;
