import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import Constants from 'expo-constants';

const makeApolloClient = () => {
  const link = new HttpLink({
    uri: Constants.expoConfig?.extra?.API_URL,
  });

  // create an inmemory cache instance for caching graphql data
  const cache = new InMemoryCache();

  // instantiate apollo client with apollo link instance and cache instance
  const client = new ApolloClient({
    link,
    cache,
  });

  return client;
};

export default makeApolloClient;
