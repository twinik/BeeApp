import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import CardExtras from "../../Atomos/Cards/CardExtras/CardExtras";
import Ganancias from "./Components/Ganancias";
import TareasPendientes from "./Components/TareasPendientes";
import MisServicios from "./Components/MisServicios";
export default function BodyData({estadisticas}) {
  return (
    <View style={estilos.container}>
      <CardExtras titulo="Ganancias">
        <Ganancias estadisticas={{...estadisticas.Contrataciones,saldo:estadisticas.Saldo}}/>
      </CardExtras>
      <CardExtras titulo="Tareas Pendientes" cardStyle={{flexDirection:'column'}}>
        <TareasPendientes/>
      </CardExtras>
      <CardExtras titulo="Mis servicios" cardStyle={{flexDirection:'column',marginBottom:20}}>
        <MisServicios estadisticas={{Visitas:estadisticas.Visitas,Sanciones:estadisticas.Sanciones}}/>
      </CardExtras>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 0.8,
  },
});
