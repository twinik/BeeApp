import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import RubrosContainer from "../RubrosContainer";
import ListViewRubros from "../Menu/ListViewRubros";

import MyText from "../MyText";
import CardPublicidad from "../Cards/CardPublicidad";

const BodyHome = () => {
  return (
    <ScrollView>
      <View style={styles.seccionCategorias}>
        <View
          style={{
            flexDirection: "row",
            marginVertical: 5,
            alignItems: "center",
          }}
        >
          <MyText
            style={styles.titulo}
            text="Servicios destacados"
            fontStyle="SemiBold"
          />
        </View>
        <RubrosContainer />
      </View>
      <View style={styles.seccionCarousel}>
        <CardPublicidad />
      </View>
      <View style={styles.seccionListView}>
        <ListViewRubros />
      </View>
    </ScrollView>
  );
};

export default BodyHome;

const styles = StyleSheet.create({
  seccionCategorias: {
    flex: 1,
  },
  seccionCarousel: {
    flex: 1,
  },
  seccionListView: {
    flex: 1,
  },

  titulo: {
    fontSize: 20,
    marginHorizontal: 5,
  },
});
