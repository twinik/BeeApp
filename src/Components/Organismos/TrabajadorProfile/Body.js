import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Data from "./Components/Data";
import Calificacion from "./Components/Calificacion";
import BotonPresupuesto from "./Components/BotonPresupuesto";

const Body = ({ data }) => {
  return (
    <View style={styles.body}>
      <View style={{ flex: 1, width: "90%" }}>
        <Data data={data} />
        <Calificacion data={data} />
        <BotonPresupuesto />
      </View>
    </View>
  );
};

export default Body;

const styles = StyleSheet.create({
  body: {
    flex: 5,
    alignItems: "center",
  },
});
