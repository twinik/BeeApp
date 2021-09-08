import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { TituloNegrita } from "../../../Atomos/Titulos/TitulosIndex";
import CounterCircle from "../../../Atomos/CounterCircle";
export default function TareasPendientes() {
  return (
    <>
      <TituloNegrita style={{ fontSize: 15 }}>
        0 mensajes sin leer
      </TituloNegrita>
      <View style={{flexDirection:'row',alignItems:'center'}}>
        <Text style={{ color: "#58595c", marginTop: 5,flex:.8 }}>
          Tu tiempo de respuesta es bueno. ¡Sigue haciendo un buen trabajo
        </Text>
        <CounterCircle valor={0} containerStyle={{marginLeft:'auto'}} textStyle={{}}/>
      </View>
    </>
  );
}
