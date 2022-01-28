/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { ApolloProvder } from '@apollo/client'

import Header from './shared/Header';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import client from './graphql/Apollo';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const apolloClient = client;
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <ApolloProvder client={apolloClient}>
        <Header app="mobile" />
      </ApolloProvder>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
