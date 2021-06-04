import React from "react";
import { View, Text, StyleSheet, Button, Dimensions } from "react-native";
import LottieView from "lottie-react-native";

const windowHeight = Dimensions.get("window").height;

export default function Info({ navigation }) {
  return (
    <View style={{ flex: 1, marginTop: windowHeight / 10 }}>
      <View style={{ flex: 3 }}>
        <LottieView
          source={require("../../../../../assets/Animaciones/gifPhone.json")}
          autoPlay
          loop
        />
      </View>
      <View style={{ flex: 2 }}>
        <Text style={style.titulo}>Cualquier trabajo que usted necesite</Text>
        <Text style={style.subTitulo}>
          En Servbee puede encontrar el{"\n"}trabajador ideal para el{"\n"}problema que
          usted necesite
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
    fontSize: 32,
    textAlign: "center",
  },
  subTitulo: {
    marginTop: 15,
    fontSize: 20,
    textAlign: "center",
  },
});
