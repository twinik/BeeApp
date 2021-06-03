import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";

export default function PickerDocument({ texto, estado, setImagen }) {
  const iconSize = 40;
  const iconRightSize = 24;

  const _pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    alert(result.uri);
    console.log(result);
    setImagen((prevState) => ({
      ...prevState,
      estado: true,
    }));
  };

  return (
    <>
      <TouchableOpacity
        style={{ flexDirection: "row", alignItems: "center" }}
        onPress={_pickDocument}
      >
        <Ionicons name="document-text-outline" size={iconSize} color="black"style={estilos.Icono} />
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
  Icono: {
    flex: 1,
  },
  texto: { flex: 3, fontSize: 18 },
  IconRight: { flex: 1, textAlign: "right" },
});
