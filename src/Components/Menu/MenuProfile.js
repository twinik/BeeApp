import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
} from "react-native";
import AppContext from "../../Context/AppContext";
import { Feather, Entypo } from "@expo/vector-icons";

export default function Profile({ navigation, onPressMenu, onPressHelp }) {
  const { User } = React.useContext(AppContext);

  return (
    //Navbar
    <View style={styles.container}>
      <View style={styles.menuHead}>
        <View style={styles.HeaderIcons}>
          <View style={styles.headerLeft}>
            <TouchableOpacity onPress={onPressMenu}>
              <Feather name="menu" size={22} color="white" />
            </TouchableOpacity>
          </View>

          <View style={styles.headerCentral}>
            <Text style={styles.titulo}>Perfil</Text>
          </View>

          <View style={styles.headerRight}>
            <TouchableOpacity onPress={onPressHelp}>
              <Entypo name="chat" size={22} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* ContenidoNavbar */}
      <View style={styles.containerContenidoNavbar}>
        <Image
          source={{
            uri: "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Clipart.png",
          }}
          style={styles.profilePhoto}
        />
        <Text style={styles.nombreApellido}>
          {User.nombre} {User.apellido}
        </Text>
        <Text style={styles.stars}>⭐ 4,92</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  containerContenidoNavbar: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  menuHead: {
    flex: 0.5,
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
