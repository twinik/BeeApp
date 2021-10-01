import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MyText from "../../../MyText";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

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
      <View style={{ flexDirection: "row", marginTop: 5 }}>
        <Ionicons
          name="location-sharp"
          size={24}
          color="#7936E4"
          style={{ marginRight: 5, marginLeft: -2 }}
        />
        <MyText
          style={{ fontSize: 18, color: "black" }}
          text={data.ubicacion}
        />
      </View>
      <View style={{ marginTop: 5 }}>
        <MyText
          text="Soy tecnico electricista especializado
                en electronica. Recibido en la Unviersidad de Buenos Aires.
                Consulte presupuesto por cualquier tipo de servicio electronico"
        />
      </View>
    </View>
  );
};

export default Data;

const styles = StyleSheet.create({
  data: {
    flex: 2.5,
    marginTop: 20,
  },
});
