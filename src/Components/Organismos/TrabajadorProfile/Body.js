import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Data from "./Components/Data"
import Calificacion from "./Components/Calificacion"

const Body = ({data}) => {
  return (
    <View style={styles.body}>
      <Data data={data}/>
      <Calificacion/>
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
