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
  Platform,
  TouchableOpacity,
} from "react-native";
import {
  FontAwesome5,
  FontAwesomeIcon,
  MaterialCommunityIcons,
  Ionicons,
  AntDesign,
  SimpleLineIcons,
} from "@expo/vector-icons";
import BotonSiguiente from "../../../Components/BotonSiguiente";
import ContainerKeyboardView from "./../../../Components/ContainerKeyboardView";
import HeaderRegistro from "./../../../Components/HeaderRegistro";
import ContenidoRegistro from "./../../../Components/ContenidoRegistro";
import FormDireccion from "../../../Components/Forms/FormDireccion";
import BotonNextBack from "../../../Components/BotonNextBack";
import { Isao, Sae, Fumi } from "react-native-textinput-effects";

const { width, height } = Dimensions.get("window");

export default function Verificacion({ navigation }) {
  return (
    <ContainerKeyboardView>
      <ImageBackground
        style={styles.container}
        source={require("../../../../assets/wallpaper.png")}
      >
        <HeaderRegistro>
          <View style={styles.containerTitulo}>
            <Text style={styles.titulo}>Dirección</Text>
          </View>
        </HeaderRegistro>

        <ContenidoRegistro addStyle={{ width: width / 1.2 }}>
          <Text style={styles.text2}>
            Porfavor, ingrese su dirección.{"\n"}Esta información no será
            compartida con nadie
          </Text>
          <View style={styles.containerInputs}>
            <FormDireccion />
          </View>
        </ContenidoRegistro>

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
              title="Siguiente"
              color="#fff"
              onPress={() => navigation.navigate("servicio")}
            />
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
    width: width / 1.3,
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
    fontSize: 16,
    height: 50,
  },
  input2: {
    width: "100%",
    backgroundColor: "#E5E5E5",
    borderRadius: 10,
    margin: 10,
    padding: 10,
    fontSize: 16,
    height: 50,
  },

  titulo: {
    fontSize: 36,
  },

  text2: {
    fontSize: 15,
  },
});
