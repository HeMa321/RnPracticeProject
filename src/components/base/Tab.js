import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes } from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from './utils/mapPropsToStyleNames';

export default class Tab extends Component {
  render() {
    console.log('hhhhhh',this.props)
    return (
      <View ref={c => (this._root = c)} style={{flex: 1}} {...this.props}>
        {this.props.children}
      </View>
    );
  }
}

Tab.propTypes = {
  ...ViewPropTypes,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ])
};

// const StyledTab = connectStyle('NativeBase.Tab', {}, mapPropsToStyleNames)(Tab);

// export { StyledTab as Tab };
