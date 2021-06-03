import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';


export default function PickerImage({objeto,setImagen}) {


  const iconSize=35
  const iconRightSize=24
  const key=objeto[0]
  const estado=objeto[1].estado
  const texto=objeto[1].texto

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }

    var imgLocation=pickerResult.uri
    setImagen((prevState)=>({
      ...prevState,
      [key]: {
        ...prevState[key],
        estado:imgLocation,
      }
    }));
  };




  return (
    <>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={openImagePickerAsync}
        >
          <FontAwesome
            name="address-card-o"
            size={iconSize}
            color="black"
            style={estilos.Icono}
          />
          <Text style={estilos.texto}>{texto}</Text>
          {estado == null ? (
            <AntDesign
              name="plussquareo"
              size={iconRightSize}
              color="black"
              style={estilos.IconRight}
            />
          ) : (
            <Ionicons
              name="checkmark"
              size={iconRightSize}
              color="green"
              style={estilos.IconRight}
            />
          )}
        </TouchableOpacity>
        </>
  );
}

const estilos = StyleSheet.create({
  Icono:{
    flex: 1 
  },
  texto:{ flex: 3, fontSize: 18 },
  IconRight:{ flex: 1, textAlign: "right" }

});
