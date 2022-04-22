import React from "react";
import {
  View,
  Text, Image, StyleSheet
} from "react-native";
import ImageTools from "../../common/ImageTools";
import ScreenUtils from "../../utils/ScreenUtils";
import SplashScreen from "react-native-splash-screen";
import NavigateUtil from "@/utils/NavigateUtil";

const WelcomePage: React.FC<any> = props => {

  React.useEffect(() => {
    setTimeout(()=>{
      SplashScreen.hide();
      NavigateUtil.navigateRest('Login')
    },1500)
  }, []);

  return (
    <View>
      <Image source={ImageTools.Welcome_Splash} style={styles.backgroundImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: ScreenUtils.width,
    height: ScreenUtils.height,
    // resizeMode: 'stretch',
    // backgroundColor: 'red',
    backgroundColor: "rgba(0,0,0,0)"
  }
});

export default WelcomePage;
