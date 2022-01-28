import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import PropTypes from 'prop-types';
import LOGO from './assets/logo.png';
import SearchInput from './common/SearchInput';

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 60,
    marginLeft: '10%',
  },
});

const Header = ({onChangeText, searchTerm}) => {
  return (
    <View style={styles.headerContainer}>
      <Image source={LOGO} style={styles.logo} />
      <SearchInput
        textAlign="center"
        onChangeText={onChangeText}
        placeholder="You can search by drug name or diseases"
        value={searchTerm}
      />
    </View>
  );
};

Header.propTypes = {
  onChangeText: PropTypes.func,
  searchTerm: PropTypes.string,
};

export default Header;
