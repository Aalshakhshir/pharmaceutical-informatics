import React from 'react';
import client from '../graphql/Apollo';
import Header from './shared/Header';
import { ApolloProvider } from '@apollo/client'

const WebAppTitle = () => {
    return (
        <div>
            <h2 style={{ color: '#9400d3', fontSize: '32' }}>
                I'm a React app component.
            </h2>
        </div>
    );
};

const App = () => {
    const apolloClient = client;

    return (
        <ApolloProvider client={apolloClient}>
            <WebAppTitle />
            <Header app="web" />
        </ApolloProvider>
    );
};

export default App;
