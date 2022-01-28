import React from 'react';
import {ActivityIndicator, View} from 'react-native';;

import PropTypes from 'prop-types';

const Spinner = ({size = 'small', style}) => {
  return (
    <View style={style}>
      <ActivityIndicator style={style} size={size} />
    </View>
  );
};

export default Spinner;

Spinner.propTypes = {
  size: PropTypes.string,
  style: PropTypes.object,
};
