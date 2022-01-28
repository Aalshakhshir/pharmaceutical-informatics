import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  searchInput: {
    width: '60%',
    marginTop: 20,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
  },
  text: {
    fontWeight: '500',
    fontSize: 16,
    marginTop: 16,
    color: '#000'
  },
  searchContainer: {
    flexDirection: 'row',
    paddingBottom: 10,
  }
});

const SearchInput = ({ onChangeText, textAlign, style, value, placeholder }) => {
  return (
    <View style={style}>
      <Text style={styles.text}>Search</Text>
      <View style={styles.searchContainer}>
        <TextInput textAlign={textAlign} onChange={onChangeText} placeholder={placeholder} value={value} style={styles.searchInput} />
      </View>
    </View>
  );
};

SearchInput.propTypes = {
  onChangeText: PropTypes.func,
  searchTerm: PropTypes.string,
  value: PropTypes.string,
  textAlign: PropTypes.string,
  placeholder: PropTypes.string
}

export default SearchInput;