import React from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import MyText from "../MyText";

const CardRubroBusqueda = ({ fc, rubros }) => {
  return (
    <View style={{ alignItems: "center" }} key={rubros.nombre}>
      <TouchableOpacity onPress={() => fc(rubros.nombre)} style={styles.card}>
        <Image
          style={styles.img}
          source={{
            uri: rubros.imgUrl,
          }}
        />
        <View
          style={{
            flex: 3,
            padding: 5,
            marginLeft: 5,
            justifyContent: "center",
          }}
        >
          <MyText style={styles.title} text={rubros.nombre} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CardRubroBusqueda;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "white",
    marginVertical: 7,
    borderRadius: 10,
    width: "90%",
    height: 70,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 4,
  },

  img: {
    flex: 2,
    width: 70,
    height: 70,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },

  title: {
    color: "black",
    fontSize: 24,
  },
});
