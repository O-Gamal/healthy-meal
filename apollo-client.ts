import { ApolloClient, InMemoryCache } from '@apollo/client';

export const endpoint = 'http://localhost:5000';

const client = new ApolloClient({
  uri: endpoint + '/graphql',
  cache: new InMemoryCache(),
  credentials: 'include',
});

export default client;
