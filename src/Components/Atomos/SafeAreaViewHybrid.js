import React from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";

export default function SafeAreaViewHybrid({ children,style }) {
  return (
    <SafeAreaView style={[estilo.AndroidSafeArea,style]}>
      <StatusBar
        animated={true}
        barStyle={"dark-content"}
        hidden={false}
        backgroundColor="#fff"
      />
      {children}
    </SafeAreaView>
  );
}

const estilo = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? 0 : 0,
  },
});
