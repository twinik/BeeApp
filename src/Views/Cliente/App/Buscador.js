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
  Image,
} from "react-native";
import BotonMenu from "../../../Components/BotonMenu";
import CardMenu from "../../../Components/cardMenu";
import { Feather, MaterialIcons, Entypo, Ionicons } from "@expo/vector-icons";
import ContainerKeyboardView from "../../../Components/ContainerKeyboardView";
import { Searchbar } from "react-native-paper";
const { width, height } = Dimensions.get("window");

export default function Bienvenido({ navigation }) {
  StatusBar.setBackgroundColor("white", true);

  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  console.log(searchQuery);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.HeaderIcons}>
          <View style={styles.headerLeft}>
            <Ionicons
              onPress={() => navigation.goBack()}
              name="arrow-back"
              size={28}
              color="#7936E4"
            />
          </View>

          <View style={styles.headerCentral}>
            <Text style={styles.titulo}>Servbee</Text>
          </View>

          <View style={styles.headerRight}></View>
        </View>

        <View style={{ flex: 1 }}>
          <Searchbar
            style={styles.Searchbar}
            inputStyle={{ fontSize: 15 }}
            placeholder="¿Que servicio quiere contratar?"
            placeholderTextColor="#7878AB"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </View>
      </View>
      <View style={styles.fragmentResultados}>
        <Image
          source={require("../../../../assets/usingPhone.png")}
          style={styles.img}
        />
        <Text style={styles.tituloDown}>Buscá en Servbee</Text>
        <Text style={styles.subTitulo}>Encontrá el servicio que necesitas</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: StatusBar.currentHeight,
  },
  header: {
    alignItems: "center",
    flex: 0.2,
  },
  fragmentResultados: {
    flex: 0.8,
    alignItems: "center",
  },
  HeaderIcons: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
  titulo: {
    color: "#7936E4",
    fontWeight: "bold",
    fontSize: 26,
  },
  Searchbar: {
    borderRadius: 30,
    width: width / 1.15,
    height: height / 18,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  img: {
    width: 200,
    height: 200,
  },
  tituloDown: {
    fontWeight: "bold",
    fontSize: 25,
  },
  subTitulo: {
    fontSize: 13,
  },
});
