import React from "react";
import { Linking } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AppContext from "../../Context/AppContext";
import { FontAwesome } from "@expo/vector-icons";
import { Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;

export default function CustomDrawerContent(props) {
  const { User ,SignOut} = React.useContext(AppContext);
  return (
    <DrawerContentScrollView {...props}>
      <View style={estilos.header}>
        <View style={estilos.containerImg}>
          <View style={estilos.imgPerfil}>
            <FontAwesome name="user" size={70} color="#7936E4" />
          </View>
        </View>
        <View style={estilos.container}>
          <Text style={estilos.userName}>
            {User.nombre} {User.apellido}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <FontAwesome
              style={{ marginRight: 5, marginTop: 3 }}
              name="star"
              size={16}
              color="#FFCB45"
            />
            <Text style={estilos.stars}>4,92 </Text>
          </View>
        </View>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Help"
        onPress={() => Linking.openURL("https://mywebsite.com/help")}
      />
      <DrawerItem
      label="Logout"
      onPress={() => {
        SignOut();
      }}
      />
    </DrawerContentScrollView>
  );
}

const estilos = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: "#7936E4",
    paddingHorizontal: 20,
    marginBottom: 20,
    height: (windowHeight / 10) * 2,
    alignItems: "center",
    flexDirection: "row",
    marginTop: -5,
  },
  container: {
    flex: 1,
  },
  imgPerfil: {
    backgroundColor: "#E5E5E5",
    borderRadius: 50,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
  },
  containerImg: {
    flex: 1,
    justifyContent: "center",
  },
  userName: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
  stars: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#E5E5E5",
  },
});
