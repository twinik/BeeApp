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
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import UserCard from "../../../Components/userCard";
import { CheckBox } from "react-native-elements";
const { width, height } = Dimensions.get("window");
import Boton from "../../../Components/Boton";
import BotonSiguiente from "../../../Components/BotonSiguiente";
import * as ImagePicker from "expo-image-picker";
import { AntDesign } from "@expo/vector-icons";
import ContainerKeyboardView from "./../../../Components/ContainerKeyboardView";
import HeaderRegistro from "./../../../Components/HeaderRegistro";
import ContenidoRegistro from "./../../../Components/ContenidoRegistro";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { Isao } from "react-native-textinput-effects";

export default function Datos({ navigation }) {
  const [isSelected, setSelection] = useState(false);

  return (
    <ContainerKeyboardView>
      <ImageBackground
        style={{ flex: 1, backgroundColor: "white" }}
        source={require("../../../../assets/wallpaper.png")}
      >
        <>
          <HeaderRegistro>
            <Text style={estilitos.titulo}>Datos</Text>
          </HeaderRegistro>
          <ContenidoRegistro addStyle={{ width: width / 1.2 }}>
            <Text style={estilitos.subtitulo}>
              Ingresa información básica sobre usted
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Isao
                label={"Nombre"}
                activeColor={"#7936E4"}
                borderHeight={8}
                inputPadding={16}
                labelHeight={24}
                passiveColor={"#B3B3B3"}
                inputStyle={{ color: "black", fontSize: 16, fontWeight:'normal'  }}
                style={{ flex: 1, marginRight: 10 }}
              />
              <Isao
                label={"Apellido"}
                activeColor={"#7936E4"}
                borderHeight={8}
                inputPadding={16}
                labelHeight={24}
                passiveColor={"#B3B3B3"}
                inputStyle={{ color: "black", fontSize: 16, fontWeight:'normal'  }}
                style={{ flex: 1, marginLeft: 10 }}
              />
            </View>

            <Isao
              label={"Numero de Telefono"}
              activeColor={"#7936E4"}
              borderHeight={8}
              inputPadding={16}
              labelHeight={24}
              passiveColor={"#B3B3B3"}
              dataDetectorTypes="phoneNumber"
              keyboardType="number-pad"
              maxLength={10}
              inputStyle={{ color: "black", fontSize: 16, fontWeight:'normal'  }}
            />
            <Isao
              label={"Email"}
              activeColor={"#7936E4"}
              borderHeight={8}
              inputPadding={16}
              labelHeight={24}
              passiveColor={"#B3B3B3"}
              keyboardType="email-address"
              autoCapitalize={"none"}
              inputStyle={{ color: "black", fontSize: 16, fontWeight:'normal'  }}
            />
            <Isao
              label={"Contraseña"}
              activeColor={"#7936E4"}
              borderHeight={8}
              inputPadding={16}
              labelHeight={24}
              passiveColor={"#B3B3B3"}
              autoCompleteType="password"
              secureTextEntry={true}
              inputStyle={{ color: "black", fontSize: 16, fontWeight:'normal'  }}
            />

            <View style={{ flex: 1, justifyContent:'center', alignItems:'center' }}>
              <CheckBox
                title="Acepto los términos de uso"
                checked={isSelected}
                containerStyle={{
                  borderWidth: 0,
                  backgroundColor: "transparent",
                }}
                onPress={() =>
                  isSelected ? setSelection(false) : setSelection(true)
                }
                titleProps={{ style: { color: "#1679C0" } }}
              />
            </View>
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
                onPress={() => navigation.navigate("verify")}
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
