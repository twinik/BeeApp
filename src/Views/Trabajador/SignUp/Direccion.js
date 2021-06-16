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
import ModalDropdown from "react-native-modal-dropdown";
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
            <Isao
              label={"Dirección"}
              activeColor={"#7936E4"}
              borderHeight={8}
              inputPadding={16}
              labelHeight={24}
              passiveColor={"#B3B3B3"}
              dataDetectorTypes="address"
              inputStyle={{
                color: "black",
                fontSize: 16,
                fontWeight: "normal",
              }}
              style={{ width: "100%" }}
            />

            <Isao
              label={"Dirección 2 (opcional)"}
              activeColor={"#7936E4"}
              borderHeight={8}
              inputPadding={16}
              labelHeight={24}
              passiveColor={"#B3B3B3"}
              dataDetectorTypes="address"
              inputStyle={{
                color: "black",
                fontSize: 16,
                fontWeight: "normal",
              }}
              style={{ width: "100%" }}
            />

            <ModalDropdown
              isFullWidth={true}
              dropdownTextStyle={{ color: "black", fontSize: 16 }}
              defaultTextStyle={{ color: "#939393" }}
              textStyle={{ color: "black", fontSize: 16 }}
              defaultValue="Provincia"
              style={{ width: "100%", margin: 10, padding: 10 }}
              options={[
                "Buenos Aires",
                "Capital Federal",
                "Chaco",
                "Chubut",
                "Córdoba",
                "Corrientes",
                "Entre Ríos",
                "Formosa",
                "Jujuy",
                "La Pampa",
                "La Rioja",
                "Mendoza",
                "Misiones",
                "Neuquén",
                "Río Negro",
                "Salta",
                "San Juan",
                "San Luis",
                "Santa Cruz",
                "Santa Fe",
                "Santiago del Estero",
                "Tierra del Fuego",
                "Tucumán",
              ]}
            />
          </View>
        </ContenidoRegistro>

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
            <TouchableOpacity
              style={styles.Boton}
              onPress={() => navigation.navigate("servicio")}
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
