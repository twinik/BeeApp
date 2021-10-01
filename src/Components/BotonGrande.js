import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";
import MyText from "./MyText";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class BotonGrande extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={[estilos.boton, this.props.style]}
        onPress={this.props.onPress}
      >
        <MyText
          style={estilos.texto}
          fontStyle={this.props.font}
          text={this.props.title}
        ></MyText>
      </TouchableOpacity>
    );
  }
}

export default BotonGrande;

const estilos = StyleSheet.create({
  boton: {
    backgroundColor: "#7936E4",
    padding: 5,
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    width: (windowWidth / 5) * 3.6,
    height: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  texto: {
    color: "#fff",
    fontSize: 24,
  },
});
