import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Subtitulo, TextoComun } from '../../../Atomos/Titulos/Textos/index'
import { CircularSlider } from 'react-native-elements-universe';
export default function HeaderData() {
  return (
    <View style={estilos.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Subtitulo style={{ color: "white" }}>Lo estás haciendo asi</Subtitulo>
        <FontAwesome5 name="question-circle" size={24} color="white" />
      </View>
      <View style={{ flexDirection: "row", marginTop: 10,height:60 }}>
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
          <TextoComun style={{ color: 'white' }}>Nivel de vendedor</TextoComun>
          <TextoComun style={{ color: 'white' }}>siguiente evaluación</TextoComun>
          <TextoComun style={{ color: 'white' }}>Tiempo de respuesta</TextoComun>
        </View>
        <View style={{ flex: 1,alignItems:'flex-end', justifyContent: 'space-between' }}>
          <TextoComun style={{ color: 'white', fontWeight: 'bold' }}>Nuevo Vendedor</TextoComun>
          <TextoComun style={{ color: 'red' }}>24 de sep. de 2021</TextoComun>
          <TextoComun style={{ color: 'green' }}>1 Horas</TextoComun>
        </View>
      </View>
      <View>
      <CircularSlider value={100} onChange={(z)=>alert(z)} />;
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 0.7,
    backgroundColor: "#343333",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});
