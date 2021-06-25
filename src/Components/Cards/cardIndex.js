import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { FontAwesome, FontAwesome5, Feather } from "@expo/vector-icons";

class CardIndex extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={[this.props.type == "User" ? estilitos.user : estilitos.worker]}
        onPress={this.props.onPress}
      >
        <View style={{ flex: 1, alignItems: "center", flexDirection: "row" }}>
          <View style={{ flex: 1, marginLeft: 40 }}>
            <FontAwesome5
              name={this.props.icon == "User" ? user - tie : user - astronaut}
              size={45}
              color={this.props.iconColor == "User" ? "#fff" : "#7936E4"}
            />
          </View>
          <View style={{ flex: 2, justifyContent: "center" }}>
            <Text
              style={
                this.props.textType == "User"
                  ? estilitos.userTitulo
                  : estilitos.workerTitulo
              }
            >
              {this.props.title}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default CardIndex;

const estilitos = StyleSheet.create({
  user: {
    alignItems: "center",
    width: "100%",
    height: 65,
    backgroundColor: "#7936E4",
    borderRadius: 10,
    marginVertical: 30,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
  userTitulo: {
    color: "#fff",
    fontSize: 28,
  },

  worker: {
    alignItems: "center",
    width: "100%",
    height: 65,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginHorizontal: 15,
    borderColor: "#7936E4",
    borderWidth: 2,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
  workerTitulo: {
    color: "#7936E4",
    fontSize: 28,
  },
});
