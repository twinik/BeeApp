import React, { useState, useEffect } from "react";
import RubroCard from "./RubroCard";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { obtener4Rubros } from "../Firebase/Utils/RubrosConexio";
import MyText from "./MyText";

export default function RubrosContainer() {
  const [rubros, setRubros] = useState(null);

  useEffect(() => {
      async function fetchData() {
        const response = await obtener4Rubros();
        setRubros(response);
      }
      fetchData();
  }, []);

  
  return (
    <View style={styles.RubrosContainer}>
      {rubros != null ? (
        rubros.map((rubro, i) => (
          <RubroCard titulo={rubro.nombre} uri={rubro.imgUrl} key={i} />
        ))
      ) : (
        <View>
          <ActivityIndicator size="small" color="#7936E4" />
        </View>
      )}
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
