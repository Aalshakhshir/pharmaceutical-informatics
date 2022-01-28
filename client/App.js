/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import {ApolloProvider} from '@apollo/client';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import client from './shared/graphql/Apollo';
import {Home} from './shared/Home';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  // Mobile Apollo client instance
  const apolloClient = client;
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    height: '100%',
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <ApolloProvider client={apolloClient}>
        <Home appType="mobile" />
      </ApolloProvider>
    </SafeAreaView>
  );
};

export default App;
