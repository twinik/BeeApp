import React from "react";
import { View, Text, StyleSheet, Button, Dimensions } from "react-native";
import LottieView from "lottie-react-native";

const windowHeight = Dimensions.get("window").height;

export default function Info({ navigation }) {
  return (
    <View style={{ flex: 1, marginTop: windowHeight / 10 }}>
      <View style={{ flex: 3 }}>
        <LottieView
          source={require("../../../../../assets/Animaciones/deal.json")}
          autoPlay
          loop
        />
      </View>
      <View style={{ flex: 2 }}>
        <Text style={style.titulo}>Contrate a precios accesibles</Text>
        <Text style={style.subTitulo}>
          Contrate a los expertos que{"\n"}usted necesite a precios{"\n"}
          estandarizados y accesibles
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
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
  subTitulo: {
    marginTop: 15,
    fontSize: 18,
    textAlign: "center",
  },
});
