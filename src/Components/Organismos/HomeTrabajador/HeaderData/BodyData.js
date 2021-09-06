import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import CardExtras from "../../../Atomos/Cards/CardExtras/CardExtras";
import Ganancias from "./Components/Ganancias";
import TareasPendientes from "./Components/TareasPendientes";
export default function BodyData() {
  return (
    <View style={estilos.container}>
      <CardExtras titulo="Ganancias">
        <Ganancias />
      </CardExtras>
      <CardExtras titulo="Tareas Pendientes" cardStyle={{flexDirection:'column'}}>
        <TareasPendientes/>
      </CardExtras>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 0.8,
  },
});
