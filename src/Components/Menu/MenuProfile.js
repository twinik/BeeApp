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
import { Feather, FontAwesome, MaterialIcons } from "@expo/vector-icons";

import MyText from "../MyText";

export default function Profile({ navigation, onPressMenu, onPressHelp }) {
  const { User } = React.useContext(AppContext);

  return (
    //Navbar
    <View style={styles.container}>
      <View style={styles.menuHead}>
        <View style={styles.HeaderIcons}>
          <View style={styles.headerLeft}>
            <TouchableOpacity onPress={onPressMenu}>
              <Feather name="menu" size={24} color="white" />
            </TouchableOpacity>
          </View>

          <View style={styles.headerCentral}>
            <MyText style={styles.titulo} text="Perfil" fontStyle="SemiBold" />
          </View>

          <View style={styles.headerRight}>
            <TouchableOpacity onPress={onPressHelp}>
              <MaterialIcons name="mode-edit" size={24} color="white" />
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
        <MyText
          style={styles.nombreApellido}
          text={User.nombre + " " + User.apellido}
          fontStyle="SemiBold"
        />
        <View style={{ flexDirection: "row" }}>
          <FontAwesome
            style={{ marginRight: 5, marginTop: 3 }}
            name="star"
            size={16}
            color="#FFCB45"
          />
          <MyText text={User.calificacion} style={styles.stars} fontStyle="Medium"/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerContenidoNavbar: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    marginBottom: 10,
  },
  menuHead: {
    flex: 0.4,
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
