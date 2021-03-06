// const React = require('react');
import React from 'react';
import {View} from 'react-native'

class StaticContainer extends React.Component {
  shouldComponentUpdate(nextProps: Object): boolean {
    return !!nextProps.shouldUpdate;
  }

  render(): ?ReactElement {
    const child = this.props.children;
    if (child === null || child === false) {
      return null;
    }
    return React.Children.only(child);
  }
}

// module.exports = StaticContainer;
export default StaticContainer;
