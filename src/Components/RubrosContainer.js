import React, { useState, useEffect } from "react";
import RubroCard from "./RubroCard";
import { View, StyleSheet, FlatList } from "react-native";
import { obtener4Rubros } from "../Firebase/Utils/RubrosConexio";
import MyText from "./MyText";

export default function RubrosContainer() {
  const [rubros, setRubros] = useState(null);

  useEffect(() => {
    (async () => {
      async function fetchData() {
        const response = await obtener4Rubros();
        setRubros(response);
      }
      fetchData();
    })();
  }, []);

  const renderItem = ({ item }) => {
    /*  rubros != null ? (
      <RubroCard titulo={item.nombre} uri={item.imgUrl} key={item.id} />
    ) : (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text>Cargando</Text>
      </View>
      ); */

    <RubroCard item={item} key={item.id} />;
  };

  return (
    <View style={styles.RubrosContainer}>
      {rubros != null ? (
        rubros.map((rubro, i) => (
          <RubroCard titulo={rubro.nombre} uri={rubro.imgUrl} key={i} />
        ))
      ) : (
        <MyText text="Cargando" />
      )}
      {/* 
      <FlatList
        data={rubros}
        horizontal={true}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />*/}
    </View>
  );
}

const styles = StyleSheet.create({
  RubrosContainer: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
