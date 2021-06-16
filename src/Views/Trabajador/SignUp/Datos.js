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
  AntDesign
} from "@expo/vector-icons";
import UserCard from "../../../Components/userCard";
import { CheckBox } from "react-native-elements";
import Boton from "../../../Components/Boton";
import BotonSiguiente from "../../../Components/BotonSiguiente";
import * as ImagePicker from "expo-image-picker";
import ContainerKeyboardView from "./../../../Components/ContainerKeyboardView";
import HeaderRegistro from "./../../../Components/HeaderRegistro";
import ContenidoRegistro from "./../../../Components/ContenidoRegistro";
import { Isao, Fumi, Sae } from "react-native-textinput-effects";
import DatePicker from "@dietime/react-native-date-picker";

const { width, height } = Dimensions.get("window");

export default function Datos({ navigation }) {
  const [date, setDate] = useState();

  return (
    <ContainerKeyboardView>
      <ImageBackground
        style={estilitos.container}
        source={require("../../../../assets/wallpaper.png")}
      >
        <>
          <HeaderRegistro>
            <Text style={estilitos.titulo}>Datos</Text>
          </HeaderRegistro>
          <ContenidoRegistro addStyle={{ width: width / 1.2 }}>
            <Text style={estilitos.subtitulo}>
              Porfavor, ingrese su nombre, apellido, número de teléfono y fecha de nacimiento
            </Text>

            <Sae
              label={"Nombre"}
              iconClass={FontAwesome5}
              iconName={"user-alt"}
              iconColor={"#7936E4"}
              labelStyle={{ color: "#B3B3B3", fontWeight: "normal" }}
              inputPadding={16}
              labelHeight={24}
              borderHeight={2}
              autoCorrect={false}
              inputStyle={{
                color: "black",
                fontSize: 16,
                fontWeight: "normal",
              }}
            />

            <Sae
              label={"Apellido"}
              iconClass={FontAwesome5}
              iconName={"user-alt"}
              iconColor={"#7936E4"}
              labelStyle={{ color: "#B3B3B3", fontWeight: "normal" }}
              inputPadding={16}
              labelHeight={24}
              // active border height
              borderHeight={2}
              // TextInput props
              autoCorrect={false}
              inputStyle={{
                color: "black",
                fontSize: 16,
                fontWeight: "normal",
              }}
            />

            <Sae
              label={"Número de Teléfono"}
              iconClass={MaterialCommunityIcons}
              iconName={"cellphone"}
              iconColor={"#7936E4"}
              labelStyle={{ color: "#B3B3B3", fontWeight: "normal" }}
              inputPadding={16}
              labelHeight={24}
              borderHeight={2}
              dataDetectorTypes="phoneNumber"
              keyboardType="number-pad"
              maxLength={10}
              autoCorrect={false}
              inputStyle={{
                color: "black",
                fontSize: 16,
                fontWeight: "normal",
              }}
            />

            <Sae
              label={"Fecha de nacimiento"}
              iconClass={Ionicons}
              iconName={"md-calendar-outline"}
              iconColor={"#7936E4"}
              labelStyle={{ color: "#B3B3B3", fontWeight: "normal" }}
              inputPadding={16}
              labelHeight={24}
              borderHeight={2}
              dataDetectorTypes="calendarEvent"
              maxLength={10}
              autoCorrect={false}
              inputStyle={{
                color: "black",
                fontSize: 16,
                fontWeight: "normal",
              }}
            />

          </ContenidoRegistro>

          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={estilitos.containerVolver}>
              <TouchableOpacity
                style={estilitos.Boton}
                onPress={() => navigation.goBack()}
              >
                <AntDesign name="left" size={32} color="#9E5FB0" />
              </TouchableOpacity>
            </View>
            <View style={estilitos.containerBoton}>
              <TouchableOpacity
                style={estilitos.Boton}
                onPress={() => navigation.navigate("datos2")}
              >
                <AntDesign name="right" size={32} color="#9E5FB0" />
              </TouchableOpacity>
            </View>
          </View>
        </>
      </ImageBackground>
    </ContainerKeyboardView>
  );
}

const estilitos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
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
