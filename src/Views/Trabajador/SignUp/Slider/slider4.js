import React from "react";
import { View, Text, StyleSheet, Button, Dimensions } from "react-native";
import LottieView from "lottie-react-native";
import BotonGrande from "../../../../Components/BotonGrande";

const windowHeight = Dimensions.get("window").height;

export default function Info() {
  return (
    <View style={{ flex: 1, marginTop: windowHeight / 10 }}>
      <View style={{ flex: 3 }}>
        <LottieView
          source={require("../../../../../assets/Animaciones/payment.json")}
          autoPlay
          loop
        />
      </View>
      <View style={{ flex: 2 }}>
        <View style={style.containerTexto}>
          <Text style={style.titulo}>Reciba su pago</Text>
          <Text style={style.subTitulo}>
            Reciba su pago directo a su{"\n"}cuenta de Mercado Pago de{"\n"}
            manera rapida, sencilla y{"\n"}segura
          </Text>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerTexto: {
    flex: 4,
  },
  containerBoton: {
    flex: 3,
    alignItems: "center",
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
  textAgree: {
    fontSize: 12,
    marginVertical: 10,
    textAlign: "center",
  },
});
