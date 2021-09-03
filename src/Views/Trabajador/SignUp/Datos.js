import React, { useState } from "react";
import {
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
  AntDesign,
} from "@expo/vector-icons";
import UserCard from "../../../Components/userCard";
import { CheckBox } from "react-native-elements";
import Boton from "../../../Components/Boton";
import BotonSiguiente from "../../../Components/BotonSiguiente";
import * as ImagePicker from "expo-image-picker";
import FormDatos from "../../../Components/Forms/FormDatos";
import BotonNextBack from "../../../Components/BotonNextBack";
import ContainerKeyboardView from "./../../../Components/ContainerKeyboardView";
import HeaderRegistro from "./../../../Components/HeaderRegistro";
import ContenidoRegistro from "./../../../Components/ContenidoRegistro";
import MenuNextBack from "../../../Components/Botones/MenuNextBack";
import { Isao, Fumi, Sae } from "react-native-textinput-effects";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useForm } from "react-hook-form";
const { width, height } = Dimensions.get("window");

export default function Datos({ navigation }) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };
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
        <>
          <HeaderRegistro>
            <Text style={estilitos.titulo}>Datos</Text>
          </HeaderRegistro>
          <ContenidoRegistro addStyle={{ width: width / 1.2 }}>
            <Text style={estilitos.subtitulo}>
              Porfavor, ingrese su nombre, apellido, número de teléfono, fecha
              de nacimiento, Email y contraseña
            </Text>

            <FormDatos control={control} errors={errors}/>
          </ContenidoRegistro>
          <View style={{ flex: 0.5, flexDirection: "row" }}>
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
        </>
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
    marginBottom: 20,
    marginHorizontal: 20,
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
