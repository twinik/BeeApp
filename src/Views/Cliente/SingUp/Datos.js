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
  Keyboard
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import UserCard from "../../../Components/userCard";
import { CheckBox } from "react-native-elements";
const { width, height } = Dimensions.get("window");
import Boton from "../../../Components/Boton";
import BotonSiguiente from "../../../Components/BotonSiguiente";
import * as ImagePicker from "expo-image-picker";

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
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={estilitos.container}
    >
      
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      
        <ImageBackground
          style={estilitos.container}
          source={require("../../../../assets/wallpaper.png")}
        >
          <View style={estilitos.containerHeader}>
            <Text style={estilitos.titulo}>Datos</Text>
            <Text style={estilitos.subtitulo}>
              Ingresa información básica sobre usted
            </Text>
          </View>
          <View style={estilitos.containerDatos}>
            <View style={estilitos.containerImagen}>
              <TouchableOpacity onPress={openImagePickerAsync}>
              <Image
                style={[
                  estilitos.foto,
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
              <View style={{flex:1,marginLeft:'5%',justifyContent:'flex-start'}}>
                <TextInput style={[estilitos.input1,{marginBottom:5}]} placeholder="Nombre"   placeholderTextColor="#B1AEAE"/>
                <TextInput style={[estilitos.input1,{marginTop:5}]} placeholder="Apellido"   placeholderTextColor="#B1AEAE"/>
              </View>
            </View>
            <View style={estilitos.containerExtra}>
            <TextInput style={[estilitos.input1,]} placeholder="Numero de Telefono"   placeholderTextColor="#B1AEAE"/>
            <TextInput style={[estilitos.input1,]} placeholder="Email"   placeholderTextColor="#B1AEAE"/>
            <TextInput style={[estilitos.input1,]} placeholder="Contraseña"   placeholderTextColor="#B1AEAE"/>
            </View>
            <CheckBox
              title='Acepto los terminos de uso'
              checked={isSelected}
              containerStyle={{borderWidth:0,backgroundColor:'transparent',flex:0.1}}
              onPress={() => isSelected ? setSelection(false) : setSelection(true)}
              titleProps={{style:{color:'#1679C0'}}}
            />
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={estilitos.containerVolver}>
              <BotonSiguiente
                style={estilitos.Boton}
                title="Volver"
                onPress={() => navigation.goBack()}
              />
            </View>
            <View style={estilitos.containerBoton}>
              <BotonSiguiente
                style={estilitos.Boton}
                title="Siguiente"
                onPress={() => navigation.navigate("verify")}
              />
            </View>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const estilitos = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerHeader: {
    flex: 3,
    marginHorizontal: "5%",
    justifyContent: "flex-end",
  },
  containerDatos: {
    flex: 4,
    marginLeft: "5%",
    marginRight:'20%',
    marginTop:'2%'
  },
  titulo: {
    fontSize: 36,
  },
  datos1: {
    flexDirection: "row",
    alignItems: "center",
  },
  input1: {
    backgroundColor: "#E5E5E5",
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1.41,

    elevation: 3,
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
    fontSize: 15,
  },
  foto: {
    borderRadius: 50,
    borderColor: "#343434",
    borderWidth: 1.5,
    width: 100,
    height: 100,
    resizeMode: "cover",
  },
  containerImagen: {
    flex: 1,
    flexDirection: "row",
    alignItems:'center',
  
    
  },
  containerExtra:{
    flex: 2,
    justifyContent:'space-evenly'
  }
});
