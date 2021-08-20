import React from "react";
import { Text, TouchableOpacity, Image } from "react-native";

export default function Busqueda({ searchQuery, Rubros, fc }) {
  var rubrosFiltrados = Rubros.filter((rubro) =>
    rubro.nombre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return rubrosFiltrados.length == 0 ? (
    <Text>No se han encontrado resultados</Text>
  ) : (
    rubrosFiltrados.map((x) => (
      <TouchableOpacity
        onPress={() => fc(x.nombre)}
        style={{
          backgroundColor: "#E9E3E9",
          marginTop: 5,
          padding: 10,
          flexDirection: "row",
        }}
        key={x.nombre}
      >
        <Image
          style={{ width: 50, height: 50 }}
          source={{
            uri: x.imgUrl,
          }}
        />
        <Text style={{ color: "black", fontSize: 30 }}>{x.nombre}</Text>
      </TouchableOpacity>
    ))
  );
}
