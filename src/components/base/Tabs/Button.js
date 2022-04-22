// const React = require('react');
import React from 'react'
// const ReactNative = require('react-native');
import {TouchableOpacity, View } import 'react-native'

const Button = props => {
  return <TouchableOpacity {...props}>{props.children}</TouchableOpacity>;
};

// module.exports = Button;
export default Button;
