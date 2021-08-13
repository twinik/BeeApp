import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function RubroCard({ titulo, uri }) {
  return (
    <TouchableOpacity style={styles.container}>
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
    backgroundColor: "lightgrey",
    height: 120,
    margin: 5,
    borderRadius: 15,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  tinyLogo: {
    width: 80,
    height: 80,
  },
});
