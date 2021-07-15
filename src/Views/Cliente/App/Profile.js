import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  Image,
} from "react-native";
import AppContext from "../../../Context/AppContext";
import { Feather, Entypo } from "@expo/vector-icons";
import MenuProfile from "../../../Components/Menu/MenuProfile";
import { Use } from "react-native-svg";
const { width, height } = Dimensions.get("window");
import { Hoshi } from "react-native-textinput-effects";

export default function Profile({ navigation }) {
  const { User } = React.useContext(AppContext);
  const { SignOut } = React.useContext(AppContext);

  /*   React.useEffect(() => {
    alert(User.apellido);
  }, []); */

  return (
    //Navbar
    <View style={styles.container}>
      <MenuProfile
        onPressMenu={() => navigation.toggleDrawer()}
        onPressHelp={() => alert("*Chat*")}
      />
      {/* Contenido */}
      <View style={styles.containerInterior}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7936E4",
    marginTop: StatusBar.currentHeight,
  },
  containerInterior: {
    flex: 2.5,
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "red",
  },
  containerContenidoNavbar: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  menuHead: {
    flex: 0.1,
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
    fontSize: 26,
  },
  nombreApellido: {
    fontSize: 24,
    color: "white",
  },
  stars: {
    fontSize: 15,
    color: "white",
  },
  profilePhoto: {
    width: 100,
    height: 100,
  },
});
