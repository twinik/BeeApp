import React from "react";
import { View, Text, StyleSheet, Button, Dimensions } from "react-native";
import LottieView from "lottie-react-native";

const windowHeight = Dimensions.get("window").height;

export default function Info() {
  return (
    <View style={{ flex: 1, marginTop: windowHeight / 10 }}>
      <View style={{ flex: 3 }}>
        <LottieView
          source={require("../../../../../assets/Animaciones/question.json")}
          autoPlay
          loop
        />
      </View>
      <View style={{ flex: 2 }}>
        <Text style={style.titulo}>
        Responda unas{"\n"}simples preguntas
        </Text>
        <Text style={style.subTitulo}>
        Responda unas simples{"\n"}preguntas y provea algunos{"\n"}documentos
        </Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerTexto: {
    flex: 1,
  },
  titulo: {
    fontSize: 32,
    textAlign: "center",
  },
  subTitulo: {
    marginTop: 15,
    fontSize: 15,
    textAlign: "center",
  },
});
