import React from "react";
import { View, Text, StyleSheet, Button, Dimensions } from "react-native";
import LottieView from "lottie-react-native";

const windowHeight = Dimensions.get("window").height;

export default function Info() {
  return (
    <View style={{ flex: 1, marginTop: windowHeight / 10 }}>
      <View style={{ flex: 3 }}>
        <LottieView
          source={require("../../../../../assets/Animaciones/services.json")}
          autoPlay
          loop
        />
      </View>
      <View style={{ flex: 2 }}>
        <Text style={style.titulo}>
        Ofrezca sus servicios
        </Text>
        <Text style={style.subTitulo}>
        Ofrezca sus servicios y gane{"\n"}dinero haciendo lo que mejor{"\n"}sabe hacer.
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
    fontWeight:'bold',
    fontSize: 30,
    textAlign: "center",
  },
  subTitulo: {
    marginTop: 15,
    fontSize: 18,
    textAlign: "center",
  },
});
