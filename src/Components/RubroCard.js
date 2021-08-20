import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function RubroCard({ titulo, uri }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.push("Buscador", { busqueda: titulo })}
    >
      <Image style={styles.tinyLogo} source={{ uri: uri }} />
      <Text>{titulo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexBasis: "40%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    height: 120,
    margin: 5,
    borderRadius: 15,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 10,
    shadowRadius: 10,

    elevation: 4,
  },
  tinyLogo: {
    width: 80,
    height: 80,
  },
});
