import React from 'react';

import {View, StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';
import Header from './Header';
import Spinner from './common/Spinner';
import DrugList from './DrugList';
import {DrugsQuery} from './graphql/queries';
import {useApolloQuery} from './graphql/hooks/useApolloQuery';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
});

export const Home = ({appType}) => {
  const [searchTerm, setSearchValue] = React.useState('');
  const {
    loading: gqlLoading,
    error,
    data,
  } = useApolloQuery(DrugsQuery(searchTerm));

  const spinnerStyle = {
    marginLeft: '25%',
    marginTop: 20,
    width: 25,
    height: 25,
  };

  const onChangeText = e => {
    if (appType === 'web') e?.persist();
    setSearchValue(e?.target?.value || e);
  };

  return (
    <View style={styles.container}>
      <Header
        appType={appType}
        onChangeText={onChangeText}
        searchTerm={searchTerm}
      />
      {gqlLoading ? <Spinner style={spinnerStyle} size="small" /> : null}
      {error ? (
        <Text style={{fontSize: 16, color: 'red', textAlign: 'center'}}>
          {' '}
          {error}{' '}
        </Text>
      ) : null}
      {data?.Drugs?.length ? <DrugList drugs={data?.Drugs} /> : null}
    </View>
  );
};

Home.propTypes = {
  appType: PropTypes.string,
};
