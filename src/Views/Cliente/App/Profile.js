import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import AppContext from "../../../Context/AppContext";
import MenuProfile from "../../../Components/Menu/MenuProfile";
import ContentDatosPerfil from "../../../Components/Content/ContentDatosPerfil";

export default function Profile({ navigation }) {
  const { SignOut } = React.useContext(AppContext);
  return (
    //Navbar
    <View style={styles.container}>
      <MenuProfile
        onPressMenu={() => navigation.toggleDrawer()}
        onPressHelp={() => navigation.navigate("EditProfile")}
      />
      {/* Contenido */}
      <ContentDatosPerfil />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7936E4",
    marginTop: StatusBar.currentHeight,
  },
  containerBoton: {
    flex: 1,
    alignItems: "center",
  },
  contenido: {
    flex: 2.5,
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  datos: {
    flex: 5,
    marginHorizontal: "8%",
  },
  inputLabel: {
    marginVertical: "2%",
  },
  titleDatos: {
    fontWeight: "bold",
    fontSize: 18,
  },
  datoDatos: {
    color: "#7936E4",
    fontSize: 16,
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
