import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from "react-native";
import { Feather, MaterialIcons, Entypo } from "@expo/vector-icons";
import ContainerKeyboardView from "../../../Components/ContainerKeyboardView";
import { SearchBar } from "react-native-elements";
import Navbar from "../../../Components/Menu/Navbar";
const { width, height } = Dimensions.get("window");

export default function Bienvenido({ navigation }) {
  StatusBar.setBackgroundColor('#7936E4', true);
  return (
    <View style={styles.container}>
      <Navbar
        onPressMenu={() => navigation.toggleDrawer()}
        onPressHelp={() => alert("*Chat*")}
        onPressSearch={() => navigation.navigate("Buscador")}
      />
      <View style={styles.containerInterior}></View>
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
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
});
