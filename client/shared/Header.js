import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DrugsQuery } from './graphql/queries';
import { useApolloQuery } from './graphql/hooks/useApolloQuery';


const styles = StyleSheet.create({
  header: {
    paddingTop: 50,
    backgroundColor: 'blue'
  },
  headerText: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
    paddingHorizontal: 10
  }
});

const Header = ({ app }) => {
    const [searchTerm, setSearchValue] = React.useState('')
    const onChangeText = (text) => {
        setSearchValue(text)
    }
    const { loading, error, data } = useApolloQuery(DrugsQuery('ear'));
  return (
    <View>
      <Text>Hello RN from the {app} app</Text>
    </View>
  );
};

export default Header;