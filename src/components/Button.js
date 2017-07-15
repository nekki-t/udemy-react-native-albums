import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = () => {
  return (
  <TouchableOpacity>
    <Text>
      Click me !!!
    </Text>
  </TouchableOpacity>
  )
};

const styles = {
  buttonSytle: {
    flex: 1,
    alignSelf: 'stretch',

  }
};
export default Button;