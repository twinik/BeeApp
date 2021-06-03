import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
} from "react-native";
import BotonSiguiente from "../../Components/BotonSiguiente";

const { width, height } = Dimensions.get("window");

export default function Verificacion({ navigation }) {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../../../assets/wallpaper.png")}
    >
      <View style={styles.containerTitulo}>
        <Text style={styles.text}>¡Listo!{"\n"}Bienvenido a Servbee</Text>
      </View>

      <View style={styles.containerBoton}>
        <BotonSiguiente
          style={styles.Boton}
          title="Finalizar"
          onPress={() => alert("Menu Principal")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },

  containerTitulo: {
    flex: 1.8,
    justifyContent: "flex-end",
  },

  containerBoton: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },

  Boton: {
    marginBottom: 10,
    marginHorizontal: 10,
  },

  text: {
    fontSize: 48,
    textAlign: "center",
  },
});
