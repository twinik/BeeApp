import React from "react";
import { StyleSheet, Image, View, TouchableOpacity } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import MyText from "../MyText";

const CardPublicidad = () => {
  return (
    <TouchableOpacity style={styles.cardPubli}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Image
          style={styles.imgPubli}
          source={{
            uri: "https://www.pngkey.com/png/full/107-1079697_coins-vector-gold-gold-coins-clipart-png.png",
          }}
        />
      </View>

      <View style={{ flex: 2 }}>
        <MyText
          style={{ color: "white", fontSize: 14 }}
          text="¡Consiga $100, regale $100!"
          fontStyle="Bold"
        />
        <MyText
          style={{ color: "white", fontSize: 11 }}
          text="Recomiende ServBee a un amigo y ambos reciben %5 de descuento"
          fontStyle="Medium"
        />
      </View>
      <AntDesign name="right" size={20} color="white" />
    </TouchableOpacity>
  );
};

export default CardPublicidad;

const styles = StyleSheet.create({
  cardPubli: {
    backgroundColor: "#7936E4",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginVertical: 10,
    height: 100,
    flexDirection: "row",
    padding: 5,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 4,
  },

  imgPubli: {
    flex: 1,
    width: 80,
    height: 80,
    resizeMode: "center",
  },
});
