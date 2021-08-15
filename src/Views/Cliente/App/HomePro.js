import React from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  SafeAreaView,
  Text,
  Button,
  ScrollView,
} from "react-native";

import Navbar from "../../../Components/Menu/Navbar";
import BodyHome from "../../../Components/Content/BodyHome";

export default function Bienvenido({ navigation }) {
  StatusBar.setBackgroundColor("#7936E4", true);
  return (
    <SafeAreaView style={styles.container}>
      <Navbar
        onPressMenu={() => navigation.toggleDrawer()}
        onPressHelp={() => alert("*Chat*")}
        onPressSearch={() => navigation.push("Buscador")}
      />

      <View style={styles.body}>
        <BodyHome />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7936E4",
    marginTop: StatusBar.currentHeight,
  },
  body: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 10,
    paddingHorizontal: "5%",
  },
  seccionCategorias: {
    flex: 1,
    backgroundColor: "red",
  },
  seccionListView: {
    flex: 1,
    backgroundColor: "orange",
  },
  seccionCarousel: {
    flex: 1,
  },
  titulo: {
    flex: 1,
    marginLeft: 10,
    fontSize: 23,
  },
  btnVerTodos: {
    flex: 1,
  },
});
