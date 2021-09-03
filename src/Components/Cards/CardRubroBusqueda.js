import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from "react-native";
import MyText from "../MyText";
import { Feather } from "@expo/vector-icons";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const CardRubroBusqueda = ({ fc, rubros }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => fc(rubros.nombre)} style={styles.card}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Feather name="search" size={20} color="black" />
        </View>

        <View style={{ flex: 5, alignItems: "flex-start" }}>
          <MyText
            style={styles.title}
            text={rubros.nombre}
            fontStyle="Bold"
          />
          <MyText
            style={styles.subtitle}
            text={rubros.descripcion}
            fontStyle="Regular"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CardRubroBusqueda;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    width: '98%',
    height: 50,
    borderRadius: 5,
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#EBEBEB",
  },

  img: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },

  title: {
    color: "black",
    fontSize: 16,
  },

  subtitle:{
    color: "black",
    fontSize: 14,
  }
});
