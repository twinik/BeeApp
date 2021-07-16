import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

class Boton extends React.Component {
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

export default Boton;

const estilos = StyleSheet.create({
  boton: {
    backgroundColor: "#7936E4",
    //padding: 5,
    borderRadius: 10,
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "25%",
    marginRight: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  texto: {
    color: "#fff",
  },
});
