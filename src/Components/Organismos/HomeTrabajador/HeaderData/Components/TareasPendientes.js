import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { TituloNegrita } from "../../../../Atomos/Titulos/TitulosIndex";
export default function TareasPendientes() {
  return (
    <>
      <TituloNegrita style={{ fontSize: 15 }}>
        0 mensajes sin leer
      </TituloNegrita>
      <View style={{flexDirection:'row'}}>
        <Text style={{ color: "#58595c", marginTop: 10,flex:.8 }}>
          Tu tiempo de respuesta es bueno. ¡Sigue haciendo un buen trabajo
        </Text>
        <Text style={{flex:.2}}>HGO</Text>
      </View>
    </>
  );
}
