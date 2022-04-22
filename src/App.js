/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from "react";
import type { Node } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import RootSiblingParent from "react-native-root-siblings";
import { observer, Provider } from "mobx-react";
import AppContainer, { SwitchNavigator } from "./navigation/Navigation";
import NavigateUtil from "@/utils/NavigateUtil";
import store from "./store/store";

@observer
class App extends Component {
  render() {
    return (
      <Provider {...store}>
        <AppContainer
          ref={nav => {
            NavigateUtil.setNavigation(nav);
          }}
          onNavigationStateChange={(prevState, newState, action) => {
            let path = SwitchNavigator.router.getPathAndParamsForState(newState);
            console.log("action--", path);
          }}
        />
      </Provider>
    );
  }
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
});

export default App;
