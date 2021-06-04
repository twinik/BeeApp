import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { FontAwesome, FontAwesome5, Feather } from "@expo/vector-icons";

export default function card({ title, onPress, image }) {
  return (
    <TouchableOpacity style={estilitos.container} onPress={onPress}>
      <View style={{ flex: 1, alignItems: "center", flexDirection: "row" }}>
        <View style={{ flex: 1, marginLeft: 40 }}>
          <FontAwesome5 name="user-tie" size={45} color="#fff" />
        </View>
        <View style={{ flex: 2, justifyContent: "center" }}>
          <Text style={estilitos.titulo}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const estilitos = StyleSheet.create({
  container: {
    alignItems: "center",
    width: '100%',
    height: 65,
    backgroundColor: "#7936E4",
    borderRadius: 10,
    marginVertical: 30,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
  titulo: {
    color: "#fff",
    fontSize: 28,
  },
});
