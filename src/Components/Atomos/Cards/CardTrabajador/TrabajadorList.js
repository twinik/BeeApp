import React from "react";
import { StyleSheet, TouchableOpacity, View, Image, Text } from "react-native";
import MyText from "../../../MyText";
import Star from "react-native-star-view";
import { MaterialIcons, Ionicons, FontAwesome5 } from "@expo/vector-icons";

const TrabajadorList = ({ key, data, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} key={key} style={styles.card}>
      <View style={{ flex: 4 }}>
        <Image
          style={styles.imgBack}
          source={{
            uri: "https://previews.123rf.com/images/serezniy/serezniy1812/serezniy181264487/113856014-frame-made-of-different-electrician-s-supplies-on-wooden-background.jpg",
          }}
        />
        <View style={styles.imageCleaner} />
        <View style={styles.containerProfile}>
          <Image style={styles.imgProfile} source={{ uri: data.img }} />
        </View>
      </View>
      <View
        style={{ flex: 5, alignItems: "center", justifyContent: "flex-end" }}
      >
        <View style={styles.body}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 10, paddingTop: 5 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons
                  name="md-person-sharp"
                  size={14}
                  color="black"
                  style={{ marginRight: 5 }}
                />
                <MyText
                  style={{ fontSize: 18 }}
                  text={data.nombre + " " + data.apellido}
                  fontStyle="SemiBold"
                />
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <FontAwesome5
                  name="toolbox"
                  size={13}
                  color="black"
                  style={{ marginRight: 6 }}
                />
                <MyText
                  style={{ fontSize: 15, color: "black" }}
                  text={data.rol}
                />
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons
                  name="location-sharp"
                  size={16}
                  color="black"
                  style={{ marginRight: 5, marginLeft: -2 }}
                />
                <MyText
                  style={{ fontSize: 15, color: "black" }}
                  text={data.ubicacion}
                />
              </View>
            </View>
            <View
              style={{
                flex: 2,
                alignItems: "flex-end",
                height: "100%",
              }}
            >
              <View
                style={{
                  flex: 1,
                  alignItems: "flex-end",
                  width: "100%",
                  justifyContent: "flex-end",
                  marginTop: 5,
                  flexDirection: "row",
                }}
              >
                <MaterialIcons name="verified" size={22} color="blue" />
              </View>
              <View
                style={{
                  flex: 3,
                  flexDirection: "row",
                  alignItems: "flex-end",
                }}
              >
                <Star score={data.calificacion} style={styles.starStyle} />
                <MyText
                  text={data.calificacion + " (54)"}
                  fontStyle="Bold"
                  style={{ color: "grey", fontSize: 13 }}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TrabajadorList;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 180,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: "white",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  body: {
    width: "90%",
    height: "90%",
  },

  imageCleaner: {
    position: "absolute",
    backgroundColor: "rgba(50, 50, 50, 0.4)",
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  containerProfile: {
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    position: "absolute",
  },

  containerVerified: {
    position: "absolute",
    width: "100%",
    alignItems: "flex-end",
  },

  imgBack: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  imgProfile: {
    width: 90,
    height: 90,
    borderRadius: 100,
    top: 10,
    borderWidth: 2,
    borderColor: "white",
  },

  starStyle: {
    width: 90,
    height: 20,
    marginRight: 2,
  },
});
