import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

class cardMenu extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={estilitos.container}
        onPress={() => alert(this.props.tipo)}
      >
        <MaterialIcons name={this.props.name} size={50} color="#D5C9E6" />
      </TouchableOpacity>
    );
  }
}

const estilitos = StyleSheet.create({
  container: {
    width: 140,
    height: 140,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
    margin: 20,
    borderRadius: 20,
  },
});

export default cardMenu;
