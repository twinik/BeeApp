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
import BotonNextBack from "../../../Components/BotonNextBack";
import { back } from "react-native/Libraries/Animated/src/Easing";
import BotonSiguiente from "../../../Components/BotonSiguiente";
import { AntDesign } from "@expo/vector-icons";
const { width, height } = Dimensions.get("window");
import ModalDropdown from "react-native-modal-dropdown";
import ContainerKeyboardView from "./../../../Components/ContainerKeyboardView";
import HeaderRegistro from "./../../../Components/HeaderRegistro";
import ContenidoRegistro from "./../../../Components/ContenidoRegistro";

import ListViewRubros from "../../../Components/Menu/ListViewRubros";

export default function Servicio({ navigation }) {
  return (
    <ContainerKeyboardView>
      <View style={styles.container}>
        <HeaderRegistro>
          <View style={styles.containerTitulo}>
            <Text style={styles.titulo}>Servicio</Text>
          </View>
        </HeaderRegistro>

        <ContenidoRegistro>
          <Text style={styles.subTitulo}>
            Elija que cateogría de servicios ofrecerá usted. 
            Una vez seleccionada la categroría, usted podra ofrecer cualquiera de las sub-categorias
            que pertenezcan a su elección
          </Text>
          <ListViewRubros />
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
              onPress={() => navigation.navigate("documentos")}
            />
          </View>
        </View>
      </View>
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

  subTitulo: {
    fontSize: 15,
  },

  input2: {
    width: "100%",
    backgroundColor: "#E5E5E5",
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
    fontSize: 16,
    height: 50,
  },
  input3: {
    width: "100%",
    height: "30%",
    backgroundColor: "#E5E5E5",
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
    textAlignVertical: "top",
  },
});
