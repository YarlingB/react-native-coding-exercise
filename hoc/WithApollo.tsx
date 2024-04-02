import { ReactNode } from 'react';
import { ApolloProvider } from '@apollo/client';

import makeApolloClient from '../api/gql/apolloClient';

interface IWithApollo {
  children: ReactNode;
}

const WithApollo = ({ children }: IWithApollo) => {
  const client = makeApolloClient();

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default WithApollo;
