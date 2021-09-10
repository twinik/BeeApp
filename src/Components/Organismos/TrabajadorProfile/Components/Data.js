import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MyText from "../../../MyText";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

const Data = ({ data }) => {
  return (
    <View style={styles.data}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 3 }}>
          <MyText
            text={data.nombre + " " + data.apellido}
            fontStyle="Bold"
            style={{ fontSize: 28 }}
          />
        </View>
        <View style={{ flex: 2 }} />
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <MyText
            text={data.calificacion + ".00"}
            fontStyle="SemiBold"
            style={{ fontSize: 18 }}
          />
          <View style={{ justifyContent: "flex-end" }}>
            <FontAwesome
              style={{ marginLeft: 5 }}
              name="star"
              size={20}
              color="#FFCB45"
            />
          </View>
        </View>
        <View style={{ flex: 3.5 }}>
          <MyText
            text={"A 3,2 Km de tí"}
            fontStyle="Bold"
            style={{ fontSize: 18, color: "#969191" }}
          />
        </View>
      </View>
    </View>
  );
};

export default Data;

const styles = StyleSheet.create({
  data: {
    flex: 1,
    width: "90%",
    marginTop: 20,
  },
});
