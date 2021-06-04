import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class BotonGrande extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={[estilos.boton, this.props.style]}
        onPress={this.props.onPress}
      >
        <Text style={estilos.texto}>{this.props.title}</Text>
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
    width: (windowWidth / 5) * 3.5,
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
