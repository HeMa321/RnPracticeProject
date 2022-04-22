// const React = require('react');
import React from 'react'
// const ReactNative = require('react-native');
// const { Component } = React;
import  { View, StyleSheet } from 'react-native';

// const StaticContainer = require('./StaticContainer');
import StaticContainer  from './StaticContainer';

const SceneComponent = Props => {
  const { shouldUpdated, ...props } = Props;
  return (
    <View {...props}>
      <StaticContainer shouldUpdate={shouldUpdated}>
        {props.children}
      </StaticContainer>
    </View>
  );
};

// module.exports = SceneComponent;
export default SceneComponent;
