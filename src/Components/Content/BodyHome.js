import React from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  SafeAreaView,
  Text,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";

import RubrosContainer from "../RubrosContainer";
import BotonVerRubros from "../Botones/BotonVerRubros";
import ListViewRubros from "../Menu/ListViewRubros";

import MyText from "../MyText";

const BodyHome = () => {
  return (
    <ScrollView>
      <View style={styles.seccionCategorias}>
        <View style={{ flexDirection: "row", marginVertical: 5 }}>
          <Text style={styles.titulo}>Categorias</Text>
          <BotonVerRubros title="Ver todos" />
        </View>
        <RubrosContainer />
      </View>
      <View style={styles.seccionCarousel}>
        <TouchableOpacity
          style={{
            backgroundColor: "lightgrey",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 15,
            margin: 10,
            height: 100
          }}
        >
          <Image
            style={{ width: 200, height: 80 }}
            source={{
              uri: "https://gst-online.com/wp-content/uploads/2018/07/Discount-1.png",
            }}
          />
        </TouchableOpacity>
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
    flex: 1,
    marginLeft: 10,
    fontSize: 23,
  },
});
