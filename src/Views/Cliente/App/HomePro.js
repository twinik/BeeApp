import React, { useState, state } from "react";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from "react-native";
import BotonMenu from "../../../Components/BotonMenu";
import CardMenu from "../../../Components/cardMenu";
import { Feather, MaterialIcons, Entypo } from "@expo/vector-icons";
import ContainerKeyboardView from "../../../Components/ContainerKeyboardView";
import { SearchBar } from "react-native-elements";
const { width, height } = Dimensions.get("window");

export default function Bienvenido({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.menuHead}>
        <View style={styles.HeaderIcons}>
          <View style={styles.headerLeft}>
            <Feather
              onPress={() => navigation.toggleDrawer()}
              name="menu"
              size={22}
              color="white"
            />
          </View>

          <View style={styles.headerCentral}>
            <Text style={styles.titulo}>Servbee</Text>
          </View>

          <View style={styles.headerRight}>
            <Entypo
              onPress={() => alert("hg")}
              name="chat"
              size={22}
              color="white"
            />
          </View>
        </View>

        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={() => navigation.navigate("Buscador")}>
            <Text style={styles.buscador}>¿Que servicio quiere contratar?</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  menuHead: {
    flex: 0.15,
    alignItems: "center",
  },
  containerInterior: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  headerLeft: {
    flex: 1,
    alignItems: "flex-start",
    marginLeft: "8%",
  },
  headerCentral: {
    flex: 1,
    alignItems: "center",
  },
  headerRight: {
    flex: 1,
    alignItems: "flex-end",
    marginRight: "8%",
  },
  HeaderIcons: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buscador: {
    color: "#7878AB",
    fontSize: 13,
    backgroundColor: "#f4f4f4",
    padding: 10,
    borderRadius: 30,
    width: width / 1.15,
    height: height / 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  titulo: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
  },
});
