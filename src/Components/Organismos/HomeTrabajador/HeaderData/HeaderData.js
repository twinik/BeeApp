import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import Subtitulo from "../../../Atomos/Titulos/Textos/Subtitulo";
import { FontAwesome5 } from "@expo/vector-icons";
export default function HeaderData() {
  return (
    <View style={estilos.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Subtitulo style={{ color: "white" }}>Lo estás haciendo asi</Subtitulo>
        <FontAwesome5 name="question-circle" size={24} color="white" />
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={{flex:1}}>
          <Text>HOla</Text>
          <Text>HOla</Text>
          <Text>HOla</Text>
        </View>
        <View style={{flex:1}}>
          <Text>HOla</Text>
          <Text>HOla</Text>
          <Text>HOla</Text>
        </View>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 0.7,
    backgroundColor: "#343333",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});
