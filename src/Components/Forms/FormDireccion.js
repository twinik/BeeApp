import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  Ionicons,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";
import { Sae } from "react-native-textinput-effects";
import ModalDropdown from "react-native-modal-dropdown";

export default function FormDatos() {
  return (
    <ScrollView style={style.container}>
      <Sae
        label={"Dirección"}
        activeColor={"#7936E4"}
        borderHeight={8}
        inputPadding={16}
        labelHeight={24}
        passiveColor={"#B3B3B3"}
        dataDetectorTypes="address"
        inputStyle={{
          color: "black",
          fontSize: 16,
          fontWeight: "normal",
        }}
        style={{ width: "100%" }}
      />

      <Sae
        label={"Dirección"}
        iconClass={Entypo}
        iconName={"direction"}
        iconColor={"#7936E4"}
        labelStyle={{ color: "#B3B3B3", fontWeight: "normal" }}
        inputPadding={16}
        labelHeight={24}
        borderHeight={2}
        autoCorrect={false}
        dataDetectorTypes="address"
        inputStyle={{
          color: "black",
          fontSize: 16,
          fontWeight: "normal",
        }}
      />

      <Sae
        label={"Dirección 2 (opcional)"}
        iconClass={Entypo}
        iconName={"direction"}
        iconColor={"#7936E4"}
        labelStyle={{ color: "#B3B3B3", fontWeight: "normal" }}
        inputPadding={16}
        labelHeight={24}
        borderHeight={2}
        autoCorrect={false}
        dataDetectorTypes="address"
        inputStyle={{
          color: "black",
          fontSize: 16,
          fontWeight: "normal",
        }}
      />

      <ModalDropdown
        isFullWidth={true}
        dropdownTextStyle={{ color: "black", fontSize: 16 }}
        defaultTextStyle={{ color: "#939393" }}
        textStyle={{ color: "black", fontSize: 16 }}
        defaultValue="Provincia"
        style={{ width: "100%", margin: 10, padding: 10 }}
        options={[
          "Buenos Aires",
          "Capital Federal",
          "Chaco",
          "Chubut",
          "Córdoba",
          "Corrientes",
          "Entre Ríos",
          "Formosa",
          "Jujuy",
          "La Pampa",
          "La Rioja",
          "Mendoza",
          "Misiones",
          "Neuquén",
          "Río Negro",
          "Salta",
          "San Juan",
          "San Luis",
          "Santa Cruz",
          "Santa Fe",
          "Santiago del Estero",
          "Tierra del Fuego",
          "Tucumán",
        ]}
      />
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
