// const React = require('react');
import React from 'react'
// const ReactNative = require('react-native');
import  { TouchableOpacity, View } from 'react-native';

const Button = props => {
  return (
    <TouchableOpacity activeOpacity={0.6} {...props}>
      {props.children}
    </TouchableOpacity>
  );
};

// module.exports = Button;
export default Button;
