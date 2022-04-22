import React from "react";
import {StyleSheet, View, StatusBar, Text,} from 'react-native';
import getTheme from '../../native-base-theme/components';
import CommonMethods from '../utils/CommonMethods';
import {
  NativeBaseProvider,
  Box,
} from 'native-base';

const SlotFunction = props => {
  return (
    <NativeBaseProvider
      style={getTheme(props.currTheme)}
    >
      <Box flex="1" safeArea bg={props.currTheme.dark_bg_color}>
        {
          props.rightView ? CommonMethods.headBackJumpLayout({
              props: props,
              materials: props.currTheme,
              title: props.title,
              rightContent: props.rightBtnView,
            }) :
            CommonMethods.headBackLayout(props, props.title, props.currTheme)
        }
        <View style={{flex: 1, backgroundColor: props.bgColor}}>
          {props.children}
        </View>
      </Box>


    </NativeBaseProvider>
  );

};

export default SlotFunction;
