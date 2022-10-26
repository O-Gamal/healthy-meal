import type { NextPage } from 'next';
import Layout from '../components/Layout';

const BookmarksPage: NextPage = () => {
  return (
    <Layout user={{ name: 'Omar' }}>
      <div>BookmarksPage</div>
    </Layout>
  );
};
export default BookmarksPage;
