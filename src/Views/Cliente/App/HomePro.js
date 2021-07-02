import React from "react";
import {
  StyleSheet,
  View,
  StatusBar,
} from "react-native";

import Navbar from "../../../Components/Menu/Navbar";


export default function Bienvenido({ navigation }) {
  StatusBar.setBackgroundColor('#7936E4', true);
  return (
    <View style={styles.container}>
      <Navbar
        onPressMenu={() => navigation.toggleDrawer()}
        onPressHelp={() => alert("*Chat*")}
        onPressSearch={() => navigation.navigate("Buscador")}
      />
      <View style={styles.containerInterior}>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7936E4",
    marginTop: StatusBar.currentHeight,
  },
  containerInterior: {
    flex: 1,
    backgroundColor: "red",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal:30
  },
});
