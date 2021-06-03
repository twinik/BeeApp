import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  Touchable,
  Alert,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { back } from "react-native/Libraries/Animated/src/Easing";
import BotonSiguiente from "../../../Components/BotonSiguiente";
import { AntDesign } from "@expo/vector-icons";
const { width, height } = Dimensions.get("window");

export default function Servicio({ navigation }) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <>
          <ImageBackground
            style={styles.container}
            source={require("../../../../assets/wallpaper.png")}
          >
            <View style={{ flex: 4.5, alignItems: "center" }}>
              <View style={styles.containerTitulo}>
                <Text style={styles.titulo}>Servicio</Text>
                <Text style={styles.text2}>
                  Elija que servicio provera usted. Puede elegir hasta tres de
                  una categoria
                </Text>
              </View>
            </View>

            <View style={{ flex: 4, alignItems: "center" }}></View>

            <View style={{ flex: 1, flexDirection: "row" }}>
              <View style={styles.containerVolver}>
                <TouchableOpacity
                  style={styles.Boton}
                  onPress={() => navigation.goBack()}
                >
                  <AntDesign name="left" size={32} color="#9E5FB0" />
                </TouchableOpacity>
              </View>
              <View style={styles.containerBoton}>
                <BotonSiguiente
                  style={styles.Boton}
                  title="Siguiente"
                  onPress={() => navigation.navigate("documentos")}
                />
              </View>
            </View>
          </ImageBackground>
        </>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },

  containerTitulo: {
    flex: 1,
    justifyContent: "flex-end",
    width: width / 1.2,
  },

  containerInputs: {
    alignItems: "center",
    width: width / 1.2,
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

  input: {
    width: "100%",
    backgroundColor: "#E5E5E5",
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },

  titulo: {
    fontSize: 36,
  },

  text2: {
    fontSize: 15,
  },
});
