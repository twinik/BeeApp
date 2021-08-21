import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from "react-native";
import MyText from "../MyText";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const CardRubroBusqueda = ({ fc, rubros }) => {
  return (
    <View key={rubros.nombre}>
      <TouchableOpacity onPress={() => fc(rubros.nombre)} style={styles.card}>
        <View style={{ flex: 3 }}>
          <Image
            style={styles.img}
            source={{
              uri: rubros.imgUrl,
            }}
          />
        </View>

        <View style={{ flex: 1, justifyContent: "center" }}>
          <MyText
            style={styles.title}
            text={rubros.nombre}
            fontStyle="Medium"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CardRubroBusqueda;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    width: width / 3 - 15,
    height: 100,
    margin: 5,
    borderRadius: 5,
    padding: 5,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  img: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  title: {
    color: "black",
    fontSize: 14,
    textAlign: "center",
  },
});
