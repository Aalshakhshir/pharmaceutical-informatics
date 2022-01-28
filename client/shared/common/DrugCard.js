import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Text} from 'react-native';

const DrugCard = ({drug}) => {
  return (
    <View style={styles.cardContainer}>
      <Text
        style={{
          position: 'absolute',
          right: 20,
          top: 16,
          fontSize: 14,
        }}>
        <Text style={{fontWeight: '600', fontSize: 18}}>Relased: </Text>{' '}
        {drug.released}
      </Text>
      <Text
        style={{
          fontSize: 18,
          fontWeight: '600',
          margin: 16,
        }}>
        <Text style={{fontWeight: '600', fontSize: 18}}>Name: </Text>{' '}
        {drug.name}
      </Text>
      <Text
        style={{
          fontSize: 14,
          margin: 16,
        }}>
        <Text style={{fontWeight: '600', fontSize: 18}}>
          List of related diseases:{' '}
        </Text>{' '}
        {drug.diseases.join(', ')}
      </Text>
      <Text
        style={{
          fontSize: 17,
          margin: 16,
        }}>
        <Text style={{fontWeight: '600', fontSize: 18}}>Description: </Text>{' '}
        {drug?.description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 1,
    borderColor: '#000',
    marginTop: 20,
    borderRadius: 10,
  },
  drugName: {
    fontSize: 18,
    fontWeight: '600',
    paddingVertical: 20,
    paddingHorizontal: 20,
    margin: 20,
  },
});

DrugCard.propTypes = {
  drug: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    diseases: PropTypes.arrayOf(PropTypes.string),
    released: PropTypes.string,
    description: PropTypes.string,
  }),
};
export default DrugCard;
