import React from "react";
import { View, Text, StyleSheet, Button, Dimensions } from "react-native";
import LottieView from "lottie-react-native";
import MyText from "../../../../Components/MyText"

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
        <MyText
            style={style.titulo}
            text={`Cualquier trabajo que \n usted necesite`}
            fontStyle="Medium"
          />

        <MyText
            style={style.subTitulo}
            text={`En Servbee puede encontrar el \n trabajador ideal para \n el problema que usted necesite`}
            fontStyle="Medium"
          />
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
