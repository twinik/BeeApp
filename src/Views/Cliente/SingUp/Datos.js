import React, { useState } from "react";
import {
  Button,
  ImageBackground,
  Image,
  Platform,
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Dimensions,
  TouchableWithoutFeedback,
  StatusBar,
  Keyboard,
  ScrollView,
} from "react-native";
import {
  FontAwesome5,
  FontAwesomeIcon,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import UserCard from "../../../Components/userCard";
import FormDatos from "../../../Components/Forms/FormDatos";
import { CheckBox } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";
import { AntDesign } from "@expo/vector-icons";
import BotonNextBack from "../../../Components/BotonNextBack";
import ContainerKeyboardView from "./../../../Components/ContainerKeyboardView";
import HeaderRegistro from "./../../../Components/HeaderRegistro";
import ContenidoRegistro from "./../../../Components/ContenidoRegistro";
import { Isao, Fumi, Sae } from "react-native-textinput-effects";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useForm } from "react-hook-form";

import MyText from "../../../Components/MyText";
const { width, height } = Dimensions.get("window");

export default function Datos({ navigation }) {
  StatusBar.setBackgroundColor("#7936E4", true);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const VerificarDatos = (data) => {
    const Filtros = {
      mismaContraseña: (x, y) => {
        return x === y;
      },
    };
    try {
      Object.keys(Filtros).forEach((filtro) => {
        if (!Filtros[filtro](data.Contraseña, data["2Contraseña"])) {
          throw "error";
        }
      });
      navigation.push("verify",data);
    } catch (e) {
      alert(e);
    }
  };

  return (
    <ContainerKeyboardView>
      <View style={estilitos.container}>
        <HeaderRegistro>
          <MyText style={estilitos.titulo} text={`Datos`} fontStyle="Medium" />
        </HeaderRegistro>
        <ContenidoRegistro addStyle={{ width: width / 1.2 }}>
          <MyText
            style={estilitos.subtitulo}
            text={`Porfavor, ingrese su nombre, apellido, número de teléfono, fecha de nacimiento, Email y contraseña`}
            fontStyle="Medium"
          />
          <FormDatos control={control} errors={errors} />
        </ContenidoRegistro>

        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={estilitos.containerVolver}>
            <BotonNextBack
              title="Volver"
              color="#7936E4"
              onPress={() => navigation.goBack()}
            />
          </View>
          <View style={estilitos.containerBoton}>
            <BotonNextBack
              type="Next"
              title="Siguiente"
              color="#fff"
              onPress={handleSubmit(VerificarDatos)}
            />
          </View>
        </View>
      </View>
    </ContainerKeyboardView>
  );
}

const estilitos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  containerHeader: {
    flex: 4,
    marginHorizontal: "8%",
    justifyContent: "flex-end",
  },
  containerDatos: {
    flex: 4,
    marginLeft: "8%",
    width: width / 1.5,
  },
  titulo: {
    fontSize: 36,
  },
  datos1: {
    flexDirection: "row",
    alignItems: "center",
  },
  datos2: {
    backgroundColor: "#FFF",
    marginTop: 10,
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
  subtitulo: {
    fontSize: 16,
  },
  containerInputs: {
    flex: 4,
    alignItems: "center",
    marginVertical: "5%",
  },
});
