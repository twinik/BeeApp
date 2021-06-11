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

export default function Datos({ navigation }) {
  const [isSelected, setSelection] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Se necesita permiso para acceder a la galeria de fotos");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
      aspect: [3, 3],
    });

    console.log(pickerResult);

    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };
  return (
    <ContainerKeyboardView>
      <ImageBackground
        style={{ flex: 1 }}
        source={require("../../../../assets/wallpaper.png")}
      >
        <>
          <HeaderRegistro>
            <Text style={estilitos.titulo}>Datos</Text>
          </HeaderRegistro>
          <ContenidoRegistro addStyle={{ width: width / 1.4 }}>
            <Text style={estilitos.subtitulo}>
              Ingresa información básica sobre usted
            </Text>
            <TextInput
              style={[estilitos.input1]}
              placeholder="Nombre"
              placeholderTextColor="#B1AEAE"
            />
            <TextInput
              style={[estilitos.input1]}
              placeholder="Apellido"
              placeholderTextColor="#B1AEAE"
            />
            <TextInput
              style={[estilitos.input1]}
              placeholder="Numero de Telefono"
              dataDetectorTypes="phoneNumber"
              keyboardType="number-pad"
              maxLength={10}
              placeholderTextColor="#B1AEAE"
            />
            <TextInput
              style={[estilitos.input1]}
              placeholder="Email"
              keyboardType="email-address"
              placeholderTextColor="#B1AEAE"
            />
            <TextInput
              style={[estilitos.input1]}
              placeholder="Contraseña"
              autoCompleteType="password"
              placeholderTextColor="#B1AEAE"
              secureTextEntry={true}
            />

            <View style={{ flex: 1 }}>
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
  input1: {
    height: 40,
    backgroundColor: "#E5E5E5",
    padding: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1.41,
    elevation: 3,
    width: "100%",
    marginVertical: "3%",
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
