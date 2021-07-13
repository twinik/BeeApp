import React from "react";
import BotonNextBack from "../BotonNextBack";
import { View, StyleSheet } from "react-native";

export default function MenuNextBack() {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={style.containerVolver}>
        <BotonNextBack
          title="Volver"
          color="#7936E4"
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={style.containerBoton}>
        <BotonNextBack
          type="Next"
          title="Siguiente"
          color="#fff"
          onPress={this.props.onPress}
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  containerVolver: {
    flex: 1,
    justifyContent: "flex-end",
  },
  containerBoton: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
});
