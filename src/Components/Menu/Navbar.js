import React, { useState, state } from "react";
import { StyleSheet, View, TouchableOpacity, Dimensions } from "react-native";
import MyText from "../MyText";
import { Feather, Entypo } from "@expo/vector-icons";
import { Searchbar } from "react-native-paper";
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
            <MyText style={styles.titulo} text="ServBee" fontStyle="Bold" />
          </View>

          <View style={styles.headerRight}>
            <TouchableOpacity onPress={this.props.onPressHelp}>
              <Entypo name="chat" size={22} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={this.props.onPressSearch}>
            <Searchbar
              editable={false}
              style={styles.Searchbar}
              inputStyle={{ fontSize: 14 }}
              placeholder="¿Que servicio quiere contratar?"
              placeholderTextColor="#7878AB"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Navbar;

const styles = StyleSheet.create({
  menuHead: {
    flex: 0.2,
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
  titulo: {
    color: "white",
    fontSize: 24,
  },
  Searchbar: {
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
});
