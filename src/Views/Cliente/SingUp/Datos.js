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
import UserCard from "../../../Components/userCard";
import FormDatos from "../../../Components/Forms/FormDatos";
import BotonNextBack from "../../../Components/BotonNextBack";
import ContainerKeyboardView from "./../../../Components/ContainerKeyboardView";
import HeaderRegistro from "./../../../Components/HeaderRegistro";
import ContenidoRegistro from "./../../../Components/ContenidoRegistro";
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
      mismaContraseña: (data) => {
        return data.Contraseña === data["2Contraseña"]
      },
      telefonoValido: (data) => {
        var regex = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g
        return regex.test(data.Telefono) && data.Telefono.length >= 8 && data.Telefono.length <= 15
      },emailValido: (data) => {
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return regex.test(data.Email)
      }
    };
    try {
      Object.keys(Filtros).forEach((filtro) => {
        if (!Filtros[filtro](data)) {
          throw filtro;
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
