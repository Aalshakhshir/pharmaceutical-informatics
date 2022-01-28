import React from 'react';
import client from './shared/graphql/Apollo';
import {ApolloProvider} from '@apollo/client';
import {Home} from '../shared/Home';

const App = () => {
  // Web Apollo client instance
  const apolloClient = client;

  return (
    <ApolloProvider client={apolloClient}>
      <Home app="web" />
    </ApolloProvider>
  );
};

export default App;
