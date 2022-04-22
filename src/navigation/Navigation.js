import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import WelcomePage from "../pages/login/WelcomePage";
import Login from "../pages/login/Login";


const AppNavigator = createStackNavigator(
  {

    WelcomePage: {
      screen: WelcomePage,
    },
    Login: {
      screen: Login,
      navigationOptions: ({ navigation }) => ({
        title: "实战项目",
        header: null,
      }),
    },
  }, {
    initialRouteName: "WelcomePage",
    defaultNavigationOptions: {
      header: null,
    },
  },
);

export const SwitchNavigator = createSwitchNavigator(
  {
    AppRoute: { screen: AppNavigator },
  }, { initialRouteName: "AppRoute" },
);

export default createAppContainer(SwitchNavigator);
