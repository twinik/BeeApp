import React from "react";
import { StyleSheet, Image, View } from "react-native";
import Star from "react-native-star-view";
import MyText from "../../../MyText";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const Calificacion = ({ data }) => {
  return (
    <View style={{ flex: 3, width: "100%" }}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Star score={data.calificacion} style={styles.starStyle} />
        <MyText
          text={data.calificacion + " (54)"}
          fontStyle="Bold"
          style={{ color: "grey", fontSize: 17 }}
        />
      </View>
      <View style={{ flex: 5 }}>
        <View style={styles.cardOpinion}>
          <View style={styles.header}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1 }}>
                <Image
                  style={styles.imgProfile}
                  source={{
                    uri: "https://www.filo.news/__export/1633034079295/sites/claro/img/2021/09/30/martitegi_portada_1.jpg_1359985867.jpg",
                  }}
                />
              </View>
              <View style={{ flex: 4 }}>
                <MyText
                  text="Germán Martitegui"
                  fontStyle="SemiBold"
                  size={18}
                />
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Ionicons
                    name="location-sharp"
                    size={16}
                    color="#7936E4"
                    style={{ marginRight: 5, marginLeft: -2 }}
                  />
                  <MyText
                    style={{ fontSize: 15, color: "black" }}
                    text="Puerto Madero"
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.text}>
            <MyText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eros eros, suscipit quis dignissim consectetur, volutpat nec neque. Duis dignissim viverra rhoncus. Praesent malesuada feugiat semper." />
          </View>
          <View style={styles.bottom}>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <MyText text="4.60" fontStyle="SemiBold" size={16} />
              <FontAwesome
                style={{ left: 5, top: 3 }}
                name="star"
                size={18}
                color="#FFCB45"
              />
            </View>
            <View style={{ alignItems: "flex-end" }}>
              <MyText
                text="Hace 3 días"
                style={{ color: "grey", marginRight: 5 }}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Calificacion;

const styles = StyleSheet.create({
  starStyle: {
    width: 120,
    height: 25,
    marginRight: 5,
  },

  cardOpinion: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 10,
    paddingTop: 5,
    paddingHorizontal: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  header: {
    flex: 3,
  },

  text: {
    flex: 5,
  },

  bottom: {
    flex: 2,
    flexDirection: "row",
  },

  imgProfile: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
});
