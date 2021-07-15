import React from "react";
import { StyleSheet, View, StatusBar, SafeAreaView, Text } from "react-native";

import Navbar from "../../../Components/Menu/Navbar";
import RubrosContainer from "../../../Components/RubrosContainer";

export default function Bienvenido({ navigation }) {
  StatusBar.setBackgroundColor("#7936E4", true);
  return (
    <SafeAreaView style={styles.container}>
      <Navbar
        onPressMenu={() => navigation.toggleDrawer()}
        onPressHelp={() => alert("*Chat*")}
        onPressSearch={() => navigation.navigate("Buscador")}
      />

      <View style={styles.body}>
        <View style={styles.seccionRubro}>
          <Text style={styles.titulo}>Categorias</Text>
          <RubrosContainer/>
        </View>
        <View>
          <Text>H</Text>
        </View>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7936E4",
  },
  body: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    flexDirection: "column",
    padding: 20,
  },
  seccionRubro: {
    flex: 1,
  },
  titulo:{
    fontSize: 20,
    fontWeight: "bold",
  },
  
});
