import React from 'react';
import {FlatList, StyleSheet, View, Text} from 'react-native';

import PropTypes from 'prop-types';
import DrugCard from './common/DrugCard';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 60,
    marginLeft: '2%',
    paddingRight: 20,
  },
  resultsText: {
    fontSize: 16,
    color: '#000',
  },
});

const DrugList = ({drugs}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.resultsText}>showing {drugs.length} results</Text>
      <FlatList
        data={drugs}
        renderItem={({item}) => <DrugCard drug={item} />}
      />
    </View>
  );
};

DrugList.propTypes = {
  drugs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      diseases: PropTypes.arrayOf(PropTypes.string),
      released: PropTypes.string,
      description: PropTypes.string,
    }),
  ),
};

export default DrugList;
