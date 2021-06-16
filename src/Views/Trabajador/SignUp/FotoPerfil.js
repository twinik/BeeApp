import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";

import BotonSiguiente from "../../../Components/BotonSiguiente";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import ContainerKeyboardView from "./../../../Components/ContainerKeyboardView";
import HeaderRegistro from "./../../../Components/HeaderRegistro";
import ContenidoRegistro from "./../../../Components/ContenidoRegistro";

const { width, height } = Dimensions.get("window");

export default function Verificacion({ navigation }) {
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
        style={styles.container}
        source={require("../../../../assets/wallpaper.png")}
      >
        <HeaderRegistro>
          <View style={styles.containerTitulo}>
            <Text style={styles.titulo}>Foto de perfil</Text>
          </View>
        </HeaderRegistro>

        <ContenidoRegistro>
          <Text style={styles.text2}>
            Necesitamos una foto suya para que{"\n"}podamos comprobar su identidad
          </Text>
          <View style={styles.containerFotoTexto}>
            <View style={styles.containerFoto}>
              <TouchableOpacity onPress={openImagePickerAsync}>
                <Image
                  style={[
                    styles.foto,
                    selectedImage != null ? { borderWidth: 0 } : {},
                  ]}
                  source={{
                    uri:
                      selectedImage !== null
                        ? selectedImage.localUri
                        : "https://freepikpsd.com/media/2019/10/default-user-profile-image-png-6-Transparent-Images.png",
                  }}
                ></Image>
              </TouchableOpacity>
            </View>
            <View style={styles.containerTextPoints}>
              <Text style={{ fontSize: 18 }}>
              • Foto de cara de frente y actual{"\n"}• Fondo limpio y simple{"\n"}• Buena
                iluminacion y no movida
              </Text>
            </View>
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
              onPress={() => navigation.navigate("direccion")}
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

  containerTexto: {
    flex: 1,
    alignItems: "center",
  },

  containerTextPoints: {
    flex: 1,
    width: width / 1.2,
  },

  containerFoto: {
    flex: 2,
    justifyContent: "center",
  },

  containerFotoTexto: {
    flex: 4,
    alignItems: "center",
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

  numInput: {
    textAlign: "center",
    fontSize: 20,
    backgroundColor: "#E5E5E5",
    borderRadius: 10,
    width: 60,
    height: 60,
  },

  titulo: {
    fontSize: 36,
  },

  text2: {
    fontSize: 16,
  },

  text3: {
    fontSize: 15,
    width: width / 1.2,
    marginTop: 20,
  },

  text4: {
    fontSize: 15,
    width: width / 1.2,
    color: "#1679C0",
  },

  foto: {
    borderRadius: 90,
    borderColor: "#343434",
    borderWidth: 4,
    width: 180,
    height: 180,
    resizeMode: "cover",
  },
});
