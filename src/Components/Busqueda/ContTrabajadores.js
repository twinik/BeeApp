import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import MyText from "../MyText";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

export default function ContTrabajadores({ traba, func, rubro }) {
  return traba == null ? (
    <View
      style={{ alignItems: "center", marginHorizontal: 30, marginVertical: 15 }}
    >
      <MyText
        text="No se han encontrado resultados para tu busqueda"
        fontStyle="Medium"
      />
    </View>
  ) : (
    <View style={{ alignItems: "center" }}>
      <View style={styles.container}>
        <MyText
          style={styles.resultados}
          text={`${traba.length} resultados en "${rubro}"`}
          fontStyle="SemiBold"
        />
        {traba.map((x, i) => (
          <TouchableOpacity
            key={i}
            style={styles.card}
            onPress={() => func.push("TrabajadorProfile", { data: x })}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={{ uri: x.img }} style={styles.img} />
              <View style={{ flexDirection: "row" }}>
                <FontAwesome
                  style={{ marginRight: 5, marginTop: 3 }}
                  name="star"
                  size={16}
                  color="#FFCB45"
                />
                <MyText
                  text={x.calificacion}
                  style={styles.stars}
                  fontStyle="Medium"
                />
              </View>
            </View>

            <View
              style={{
                flex: 2,
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <MyText
                text={x.nombre + " " + x.apellido}
                fontStyle="SemiBold"
                style={{ fontSize: 18, color: "#7936E4" }}
              />
              <MyText
                text="Servicios completados"
                fontStyle="Medium"
                style={{ fontSize: 12, color: "#7936E4" }}
              />
              <View style={{ flexDirection: "row" }}>
                <MaterialIcons
                  name="playlist-add-check"
                  size={20}
                  color="#7936E4"
                />
                <MyText
                  text=" 659"
                  fontStyle="Medium"
                  style={{ fontSize: 14, color: "black" }}
                />
              </View>
              <MyText
                text="Ultimo servicio"
                fontStyle="Medium"
                style={{ fontSize: 12, color: "#7936E4" }}
              />
              <MyText
                text="Ayer"
                fontStyle="SemiBold"
                style={{ fontSize: 14, color: "black" }}
              />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: "100%",
  },

  resultados: {
    fontSize: 16,
    marginBottom: 5,
  },

  card: {
    width: "100%",
    height: 120,
    flexDirection: "row",
    marginVertical: 3,
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

  img: {
    resizeMode: "cover",
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});

/* 
  {
    apellido": "macri",
    "calificacion": 5,
    "descripcion": "EL YOKAS",
    "dni": 4508123,
    "id": "5AJwiZm6NcLNM62h0rPf",
    "nombre": "Rodolfo",
    "rol": "gobir",
    "sexo": "pete",
    "ubicacion": "Palermo",
    "uid": "mXO4ecego0PWIHumek6dYot7oEP2",
  },
  }
  */
