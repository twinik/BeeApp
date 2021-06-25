import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
} from "react-native";
import AppContext from "../../Context/AppContext";
import BotonNextBack from "../../Components/BotonNextBack";

const { width, height } = Dimensions.get("window");


export default function Verificacion({ navigation }) {
  
const { SignUp } = React.useContext(AppContext);
  return (
    <ImageBackground
      style={styles.container}
      source={require("../../../assets/wallpaper.png")}
    >
      <View style={styles.containerTitulo}>
        <Text style={styles.text}>¡Listo!{"\n"}Bienvenido a Servbee</Text>
      </View>

      <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={styles.containerVolver}>
              <BotonNextBack title="Volver" color="#7936E4" onPress={() => navigation.goBack()}/>
            </View>
            <View style={styles.containerBoton}>
              <BotonNextBack type="Next" title="Iniciar Sesión" color='#fff' onPress={() => navigation.replace("SignIn")}/>           
            </View>
      </View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
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

  containerVolver: {
    flex: 1,
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
