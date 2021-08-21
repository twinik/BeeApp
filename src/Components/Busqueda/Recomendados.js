import React from "react";
import { Text, TouchableOpacity, Image, View, StyleSheet } from "react-native";
import CardRubroBusqueda from "../Cards/CardRubroBusqueda";

export default function Recomendados({ Rubros, fc }) {
  return (
    /*     <FlatList
      data={Rubros}
      numColumns={3}
      keyExtractor={Rubros.nombre}
      renderItem={() => {
        <CardRubroBusqueda fc={fc} rubros={Rubros} />;
      }}
      style={{ width: 50, height: 50, backgroundColor: "red" }}
    /> */
    <View style={styles.container}>
      {Rubros.map((rubros) => (
        <CardRubroBusqueda fc={fc} rubros={rubros} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: "2%",
  },
});
