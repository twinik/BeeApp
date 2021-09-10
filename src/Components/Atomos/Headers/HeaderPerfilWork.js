import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
  ImageBackground,
} from "react-native";

import UserImage from "../Cards/CardMensaje/Components/UserImage";

import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const HeaderPerfilWork = ({ onBack, data }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.img}
        source={{
          uri: "https://previews.123rf.com/images/serezniy/serezniy1812/serezniy181264487/113856014-frame-made-of-different-electrician-s-supplies-on-wooden-background.jpg",
        }}
      >
        <View style={styles.icons}>
          <TouchableOpacity onPress={onBack} style={{ flex: 1 }}>
            <Ionicons name="arrow-back" size={35} color="#7936E4" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => alert("Add to favs")}
            style={{ flex: 1, alignItems: "flex-end" }}
          >
            <MaterialIcons name="favorite-outline" size={35} color="#7936E4" />
          </TouchableOpacity>
        </View>

        <View style={{ flex: 2, alignItems: "flex-end", flexDirection: "row" }}>
          <View style={{ flex: 1 }} />

          <View style={styles.containerProfileImg}>
            <UserImage uri={data.img} style={styles.imgProfile} disabled />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HeaderPerfilWork;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerProfileImg: {
    flex: 0.9,
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: 100
  },

  imgProfile: {
    width: 130,
    height: 130,
    borderRadius: 100,
  },

  img: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },

  icons: {
    flex: 1,
    flexDirection: "row",
    marginTop: 15,
    marginHorizontal: 15,
  },
});
