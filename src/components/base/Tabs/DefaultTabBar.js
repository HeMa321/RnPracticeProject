import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {connectStyle, StyleProvider} from 'native-base-shoutem-theme';
import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';
import variable from '../variables/platform';
import TabHeading from './TabHeading';
import {Text} from 'react-native';
import TabContainer from './TabContainer';
// const ReactNative = require('react-native');

// const { StyleSheet, View, Animated, Platform } = ReactNative;
import {StyleSheet, View, Animated, Platform} from 'react-native';
// const Button = require('./Button');
import Button from './Button';

export default class DefaultTabBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderTabOption(name, page) {
  }

  renderTab = (
    name,
    page,
    isTabActive,
    onPressHandler,
    tabStyle,
    activeTabStyle,
    textStyle,
    activeTextStyle,
    tabHeaderStyle,
    tabFontSize,
    disabled,
    disabledTextColor,
    accessible,
    accessibilityLabel,
  ) => {
    this.renderTabOption()
    const headerContent =
      typeof name !== 'string' ? name.props.children : undefined;
    const {activeTextColor='red', inactiveTextColor} = this.props;
    const fontWeight = isTabActive ? 'bold' : 'normal';
    const isDisabled = !!disabled;
    let textColor;
    if (isDisabled) {
      textColor = disabledTextColor;
    } else if (isTabActive) {
      textColor = activeTextStyle ? activeTextStyle.color : activeTextColor; // activeTextColor: default color for active Tab
    } else {
      textColor = textStyle ? textStyle.color : inactiveTextColor; // inactiveTextColor: default color for inactive Tab
    }
    const variables = this.context.theme
      ? this.context.theme['@@shoutem.theme/themeStyle'].variables
      : variable;
    const accessibilityState = {
      disabled: isDisabled ? true : false,
      selected: isTabActive ? true : false,
    };
    if (typeof name === 'string') {
      return (
        <Button
          style={{
            flex: 1,
            alignSelf: 'stretch',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: null,
            borderBottomColor: 'transparent',
            backgroundColor: 'transparent',
          }}
          disabled={isDisabled}
          key={name}
          accessible={accessible}
          accessibilityRole="tab"
          accessibilityLabel={accessibilityLabel}
          accessibilityState={accessibilityState}
          onPress={() => onPressHandler(page)}>
          <TabHeading
            style={isTabActive ? activeTabStyle : tabStyle}
            active={isTabActive}>
            <Text
              style={[
                {fontSize: tabFontSize},
                isTabActive ? activeTextStyle : textStyle,
                {color: textColor},
              ]}>
              {name}
            </Text>
          </TabHeading>
        </Button>
      );
    }
    return (
      <Button
        style={{flex: 1}}
        disabled={isDisabled}
        key={_.random(1.2, 5.2)}
        accessible={accessible}
        accessibilityRole="tab"
        accessibilityLabel={accessibilityLabel}
        accessibilityState={accessibilityState}
        onPress={() => onPressHandler(page)}>
        <TabHeading style={tabHeaderStyle} active={isTabActive}>
          {headerContent}
        </TabHeading>
      </Button>
    );
  }

  render() {
    const variables = this.context.theme
      ? this.context.theme['@@shoutem.theme/themeStyle'].variables
      : variable;
    const platformStyle = variables.platformStyle;
    const containerWidth = this.props.containerWidth;
    const numberOfTabs = this.props.tabs.length;
    const tabUnderlineStyle = {
      position: 'absolute',
      width: containerWidth / numberOfTabs,
      height: 4,
      backgroundColor: variables.topTabBarActiveBorderColor,
      bottom: 0,
    };

    const left = this.props.scrollValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, containerWidth / numberOfTabs],
    });
    return (
      <TabContainer
        style={[
          {backgroundColor: 'transparent'},
          {
            height: 45,
            flexDirection: 'row',
            justifyContent: 'space-around',
            borderWidth: 1,
            borderTopWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderBottomColor: '#ccc',
          },
          this.props.tabContainerStyle
        ]}>
        {this.props.tabs.map((name, page) => {
          const isTabActive = this.props.activeTab === page;
          const renderTab = this.props.renderTab || this.renderTab;
          return renderTab(
            name,
            page,
            isTabActive,
            this.props.goToPage,
            this.props.tabStyle[page],
            this.props.activeTabStyle[page],
            this.props.textStyle[page],
            this.props.activeTextStyle[page],
            this.props.tabHeaderStyle[page],
            variables.tabFontSize,
            this.props.disabled[page],
            this.props.disabledTextColor,
            this.props.accessible[page],
            this.props.accessibilityLabel[page],
          );
        })}
        <Animated.View
          style={[tabUnderlineStyle, {left}, this.props.underlineStyle]}
        />
        <View style={{flexDirection: 'row'}} />
      </TabContainer>
    );
  }
}
DefaultTabBar.propTypes = {
  goToPage: PropTypes.func,
  activeTab: PropTypes.number,
  tabs: PropTypes.array,
  backgroundColor: PropTypes.string,
  activeTextColor: PropTypes.string,
  inactiveTextColor: PropTypes.string,
  disabledTextColor: PropTypes.string,
  // tabStyle: PropTypes.shape({
  //   style: PropTypes.any,
  // }),
  tabStyle: PropTypes.array,
  renderTab: PropTypes.func,
  underlineStyle: PropTypes.shape({
    style: PropTypes.any,
  }),
  tabContainerStyle: PropTypes.shape({
    style: PropTypes.any,
  }),
  accessible: PropTypes.array,
  accessibilityLabel: PropTypes.array,
};
DefaultTabBar.defaultProps = {
  activeTextColor: variable.topTabBarActiveTextColor,
  inactiveTextColor: variable.topTabBarTextColor,
  disabledTextColor: variable.tabBarDisabledTextColor,
  backgroundColor: 'transparent',
  tabContainerStyle: {},
  tabFontSize: variable.tabFontSize,
};
