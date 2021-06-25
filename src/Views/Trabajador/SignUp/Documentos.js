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
import BotonNextBack from "../../../Components/BotonNextBack";
import ContainerKeyboardView from "./../../../Components/ContainerKeyboardView";
import HeaderRegistro from "./../../../Components/HeaderRegistro";
import ContenidoRegistro from "./../../../Components/ContenidoRegistro";
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
    <ContainerKeyboardView>
      <ImageBackground
        style={styles.container}
        source={require("../../../../assets/wallpaper.png")}
      >
        <HeaderRegistro>
          <View style={styles.containerTitulo}>
            <Text style={styles.titulo}>Identidad</Text>
          </View>
        </HeaderRegistro>

        <ContenidoRegistro>
          <Text style={[styles.text2]}>
            Elija que servicio provera usted. Puede elegir hasta tres de una
            categoria
          </Text>
          <View
            style={{
              flex: 4,
              justifyContent: "space-evenly",
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
        </ContenidoRegistro>

        <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={styles.containerVolver}>
              <BotonNextBack title="Volver" color="#7936E4" onPress={() => navigation.goBack()}/>
            </View>
            <View style={styles.containerBoton}>
            <BotonNextBack type="Next" title="Siguiente" color='#fff' onPress={() => navigation.navigate("finRegistro")}/>              
            </View>
          </View>
      </ImageBackground>
    </ContainerKeyboardView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
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
    marginBottom: 20,
    marginHorizontal: 20,
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
