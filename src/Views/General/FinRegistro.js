import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
} from "react-native";
import AppContext from "../../Context/AppContext";
import BotonNextBack from "../../Components/BotonNextBack";
import LottieView from "lottie-react-native";

const { width, height } = Dimensions.get("window");

export default function Verificacion({ navigation }) {
  const { SignUp } = React.useContext(AppContext);
  return (
    <View style={styles.container}>
      <View style={styles.containerLottie}>
        <LottieView
          source={require("../../../assets/Animaciones/background.json")}
          autoPlay
          loop
          style={{ width: "100%" }}
        />
      </View>
      <View style={styles.containerTitulo}>
        <Text style={styles.text}>¡Listo!{"\n"}Bienvenido a Servbee</Text>
      </View>

      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={styles.containerVolver}>
          <BotonNextBack
            title="Volver"
            color="#7936E4"
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={styles.containerBoton}>
          <BotonNextBack
            type="Next"
            title="Iniciar Sesión"
            color="#fff"
            onPress={() => navigation.replace("SignIn")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "white",
  },

  containerTitulo: {
    flex: 2.1,
    justifyContent: "center",
  },

  containerBoton: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },

  containerVolver: {
    flex: 1,
    justifyContent: "flex-end",
  },

  containerLottie: {
    flex: 1,
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
