import React from "react";
import {
  View,
  Text, Image, StyleSheet, TouchableOpacity
} from "react-native";
import material from "../../../native-base-theme/variables/material";
import getTheme from "../../../native-base-theme/components/index";
import {
  NativeBaseProvider,
  Input,
  extendTheme,
  HStack,
  Button,
  Box,
  ScrollView
} from "native-base";

import userStore from "@/store/userStore";
import CommonMethods from "@/utils/CommonMethods";
import ImageTools from "@/common/ImageTools";
import { Icon } from "@/components/base";
import Colors from "@/common/Colors";
import ScreenUtils from "@/utils/ScreenUtils";

const Login: React.FC<any> = props => {

  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");

  const currTheme = userStore.themeStyle;
  return (
    <NativeBaseProvider style={getTheme(currTheme)}>
      <Box safeArea flex="1" bg={currTheme.dark_bg_color}>
        {CommonMethods.headBackLayout(null, "登录", currTheme)}
        <ScrollView flex={1} bg={currTheme.dark_bg_color}>
          <View style={{ height: 100, alignItems: "center", justifyContent: "center", marginVertical: 50 }}>
            <Image source={ImageTools.Welcome_Splash} style={{ width: 80, height: 80, borderRadius: 8 }} />
          </View>

          <View style={{
            marginVertical: 10,
            flexDirection: "row", alignItems: "center", flex: 1,
            height: 55, borderWidth: 1, borderColor: Colors.hint, marginHorizontal: 20
          }}>
            <Icon name={"cellphone"} type={"MaterialCommunityIcons"}
                  style={styles.icon_view} />
            <Input
              flex={"1"} placeholder={"请输入账号"}
              borderWidth={"0"} fontSize={"16px"}
              selectionColor={"red"}
              placeholderTextColor={Colors.hint}
              clearButtonMode={"while-editing"}
              value={phone}
              onChangeText={(txt) => {
                setPhone(txt);
              }}
            />
          </View>
          <View style={{
            marginVertical: 10,
            flexDirection: "row", alignItems: "center", flex: 1,
            height: 55, borderWidth: 1, borderColor: Colors.hint, marginHorizontal: 20
          }}>
            <Icon name={"lock-closed-outline"} type={"Ionicons"}
                  style={styles.icon_view} />
            <Input
              flex={"1"} placeholder={"请输入密码"}
              borderWidth={"0"} fontSize={"16px"}
              selectionColor={"red"}
              placeholderTextColor={Colors.hint}
              clearButtonMode={"while-editing"}
              secureTextEntry={true}
              value={password}
              onChangeText={(txt) => {
                setPassword(txt);
              }}
            />
          </View>

          <TouchableOpacity style={{
            height: 50, width: ScreenUtils.width - 40,
            backgroundColor: Colors.theme_color,marginLeft:20,
            justifyContent:'center',alignItems:'center',
            borderRadius:10,marginTop:20
          }}
          onPress={()=>{
           console.warn('点击登陆事件',phone,password)
          }}
          >
            <Text style={{ fontSize: 18, color: "#fff" }}>登陆</Text>
          </TouchableOpacity>
        </ScrollView>
      </Box>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  icon_view: {
    fontSize: 22,
    color: Colors.hint,
    marginLeft: 15,
    marginRight: 8
  }
});

export default (Login);
