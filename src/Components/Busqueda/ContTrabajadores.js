import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import MyText from "../MyText";

export default function ContTrabajadores({ traba, func, rubro }) {
  return traba == null ? (
    <MyText
      style={styles.resultados}
      text="No se han encontrado resultados"
      fontStyle="SemiBold"
    />
  ) : (
    <View>
      <MyText
        style={styles.resultados}
        text={`${traba.length} resultados en "${rubro}"`}
        fontStyle="SemiBold"
      />
      {traba.map((x, i) => (
        <TouchableOpacity
          key={i}
          style={{
            backgroundColor: "#ff3",
            padding: 20,
            borderColor: "#DEDEDE",
            borderWidth: 1,
            borderRadius: 5,
            flexDirection: "row",
          }}
          onPress={() => func.push("TrabajadorProfile", { data: x })}
        >
          <Image
            source={{ uri: x.img }}
            style={{ width: 75, height: 75, margin: 10 }}
          />
          <View style={{ justifyContent: "center" }}>
            <Text>{x.nombre}</Text>
            <Text>{x.apellido}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  resultados: {},
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
