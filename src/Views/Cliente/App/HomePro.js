import React from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  SafeAreaView,
  Text,
  Button,
} from "react-native";

import Navbar from "../../../Components/Menu/Navbar";
import RubrosContainer from "../../../Components/RubrosContainer";
import BotonVerRubros from "../../../Components/Botones/BotonVerRubros";

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
        <View style={styles.seccionCategorias}>
          <View style={{ flexDirection: "row", marginVertical: 5 }}>
            <Text style={styles.titulo}>Categorias</Text>
            <BotonVerRubros title="Ver todos" />
          </View>
          <RubrosContainer />
        </View>
        <View style={styles.seccionListView}>
          <Text>RUBROS</Text>
        </View>
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
    flexDirection: "column",
    paddingTop: 10,
    paddingHorizontal: 25,
  },
  seccionCategorias: {
    flex: 1,
    backgroundColor: "red",
  },
  seccionListView: {
    flex: 1,
    backgroundColor: "orange",
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
