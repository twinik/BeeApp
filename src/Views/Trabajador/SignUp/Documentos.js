import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import BotonSiguiente from "../../../Components/BotonSiguiente";
import Picker from "../../../Components/ImagePicker";
import PickerDocument from "../../../Components/DocumentPicker";
import { AntDesign } from "@expo/vector-icons";
const { width, height } = Dimensions.get("window");

export default function Verificacion({ navigation }) {
  const [selectedImage, setSelectedImage] = React.useState({
    1: { estado: null, texto: "Foto frontal de su Dni" },
    2: { estado: null, texto: "Foto trasera de su Dni" },
  });
  const [selectedDocument, setSelectedDocument] = React.useState({
    estado: null,
    texto: "Foto de su CV (curriculum vitae)",
  });

  const [selectedTitle, setSelectedTitle] = React.useState({
    estado: null,
    texto: "Foto de su titulo de terciario/secundario",
  });

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
                <Text style={styles.titulo}>Ultimos{"\n"}Documentos</Text>
                <Text style={[styles.text2]}>
                  Elija que servicio provera usted. Puede elegir hasta tres de
                  una categoria
                </Text>
              </View>
            </View>

            <View
              style={{
                flex: 4,
                justifyContent: "space-evenly",
                marginHorizontal: "10%",
              }}
            >
              {Object.entries(selectedImage).map((x) => (
                <Picker objeto={x} key={x[0]} setImagen={setSelectedImage} />
              ))}
              <PickerDocument
                texto={selectedDocument.texto}
                estado={selectedDocument.estado}
                setImagen={setSelectedDocument}
              />
            </View>

            <View style={{ flex: 0.8, flexDirection: "row" }}>
              <View style={styles.containerVolver}>
                <TouchableOpacity
                  style={styles.Boton}
                  onPress={() => navigation.goBack()}
                >
                  <AntDesign name="left" size={32} color="#9E5FB0" />
                </TouchableOpacity>
              </View>
              <View style={styles.containerBoton}>
                <TouchableOpacity
                  style={styles.Boton}
                  onPress={() => navigation.navigate("finRegistro")}
                >
                  <AntDesign name="right" size={32} color="#9E5FB0" />
                </TouchableOpacity>
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
