import React from "react";
import { Text, TouchableOpacity, Image, StyleSheet, View } from "react-native";

export default function Recomendados({ Rubros, fc }) {
  return Rubros.map((x) => (
    <View style={{ alignItems: "center" }} key={x.nombre}>
      <TouchableOpacity onPress={() => fc(x.nombre)} style={styles.card}>
        <Image
          style={styles.img}
          source={{
            uri: x.imgUrl,
          }}
        />
        <View style={{flex: 3, padding: 5, marginLeft: 5, justifyContent: 'center'}}>
          <Text style={styles.title}>{x.nombre}</Text>
        </View>
      </TouchableOpacity>
    </View>
  ));
}

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
    borderBottomLeftRadius: 10
  },

  title: {
    color: "black",
    fontSize: 30,
  },
});
