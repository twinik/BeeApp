import React, { useState, state } from "react";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from "react-native";
import { Feather, MaterialIcons, Entypo } from "@expo/vector-icons";
const { width, height } = Dimensions.get("window");

class Navbar extends React.Component {
  render() {
    return (
      <View style={styles.menuHead}>
        <View style={styles.HeaderIcons}>
          <View style={styles.headerLeft}>
            <TouchableOpacity onPress={this.props.onPressMenu}>
              <Feather name="menu" size={22} color="white" />
            </TouchableOpacity>
          </View>

          <View style={styles.headerCentral}>
            <Text style={styles.titulo}>Servbee</Text>
          </View>

          <View style={styles.headerRight}>
            <TouchableOpacity onPress={this.props.onPressHelp}>
              <Entypo name="chat" size={22} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={this.props.onPressSearch}>
            <Text style={styles.buscador}>¿Que servicio quiere contratar?</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Navbar;

const styles = StyleSheet.create({
  menuHead: {
    flex: 0.15,
    alignItems: "center",
  },
  headerLeft: {
    flex: 1,
    alignItems: "flex-start",
    marginLeft: "8%",
  },
  headerCentral: {
    flex: 1,
    alignItems: "center",
  },
  headerRight: {
    flex: 1,
    alignItems: "flex-end",
    marginRight: "8%",
  },
  HeaderIcons: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buscador: {
    color: "#7878AB",
    fontSize: 13,
    backgroundColor: "#f4f4f4",
    padding: 10,
    borderRadius: 30,
    width: width / 1.15,
    height: height / 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  titulo: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
  },
});
