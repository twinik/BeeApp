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
  StatusBar
} from "react-native";
import BotonSiguiente from "../../../Components/BotonSiguiente";
import Picker from "../../../Components/ImagePicker";
import PickerDocument from "../../../Components/DocumentPicker";
import { AntDesign } from "@expo/vector-icons";
import ContainerKeyboardView from "./../../../Components/ContainerKeyboardView";
import HeaderRegistro from "./../../../Components/HeaderRegistro";
import ContenidoRegistro from "./../../../Components/ContenidoRegistro";
const { width, height } = Dimensions.get("window");

export default function Verificacion({ navigation }) {
  const [selectedImage, setSelectedImage] = React.useState({
    1: { estado: null, texto: "Foto frontal de su Dni" },
    2: { estado: null, texto: "Foto trasera de su Dni" },
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
          Por ultimo necesitamos algunos documentos más para confirmar su identidad
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
          </View>
        </ContenidoRegistro>

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
    </ContainerKeyboardView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor:'white'
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
