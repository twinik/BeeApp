import React from "react";
import RubroCard from "./RubroCard";
import { View, StyleSheet } from "react-native";
export default function RubrosContainer() {
  return (
    <View style={styles.RubrosContainer}>
      <RubroCard />
      <RubroCard />
      <RubroCard />
      <RubroCard />
    </View>
  );
}

const styles = StyleSheet.create({
  RubrosContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
