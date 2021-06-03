import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform
} from "react-native";
import BotonSiguiente from "../../../Components/BotonSiguiente";

const { width, height } = Dimensions.get("window");

export default function Verificacion({ navigation }) {

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
                <Text style={styles.titulo}>Dirección</Text>
                <Text style={styles.text2}>
                  Esta información no será compartida con nadie
                </Text>
              </View>
            </View>

            <View style={{ flex: 4, alignItems: "center" }}>
              <View style={styles.containerInputs}>
                <TextInput
                  style={styles.input}
                  placeholder="Dirección"
                ></TextInput>
                <TextInput
                  style={styles.input}
                  placeholder="Dirección 2 (opcional)"
                ></TextInput>

              </View>
            </View>

            <View style={{ flex: 1, flexDirection: "row" }}>
              <View style={styles.containerVolver}>
                <BotonSiguiente
                  style={styles.Boton}
                  title="Volver"
                  onPress={() => navigation.goBack()}
                />
              </View>
              <View style={styles.containerBoton}>
                <BotonSiguiente
                  style={styles.Boton}
                  title="Siguiente"
                  onPress={() => navigation.navigate("servicio")}
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
