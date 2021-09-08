import React from "react";
import { View, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Subtitulo, TextoComun } from "../../Atomos/Titulos/Textos/index";
import CirculoProgreso from "../../Atomos/CirculoProgreso";

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
        <Subtitulo style={{ color: "white", fontSize: 18 }}>
          Lo estás haciendo asi
        </Subtitulo>
        <FontAwesome5 name="question-circle" size={24} color="white" />
      </View>
      <View style={{ flexDirection: "row", marginTop: 20, height: 75 }}>
        <View style={{ flex: 1, justifyContent: "space-between" }}>
          <TextoComun style={{ color: "white" }}>Nivel de vendedor</TextoComun>
          <TextoComun style={{ color: "white" }}>
            Siguiente evaluación
          </TextoComun>
          <TextoComun style={{ color: "white" }}>
            Tiempo de respuesta
          </TextoComun>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <TextoComun style={{ color: "white", fontWeight: "bold" }}>
            Nuevo Vendedor
          </TextoComun>
          <TextoComun style={{ color: "#f85c5c" }}>
            24 de sep. de 2021
          </TextoComun>
          <TextoComun style={{ color: "green" }}>1 Horas</TextoComun>
        </View>
      </View>
      <View style={{ marginTop: 40,flexDirection:'row',width:"100%" }}>
        <CirculoProgreso value={100} label="Tasa de respuesta"/>
        <CirculoProgreso value={0} label="Finalizacion del pedido"/>
        <CirculoProgreso value={100} label="Entrega a tiempo"/>
        <CirculoProgreso value={0} label="Calificacion positiva" contenido="N/A"/>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: "#313131",
    paddingVertical: 20,
    paddingHorizontal: 10,
    justifyContent:'center'
  },
});
