import React from 'react'
import { Text, TouchableOpacity, Image } from "react-native";



export default function Recomendados({  Rubros,fc}) {
    return Rubros.map((x) => (
      <TouchableOpacity
        onPress={() => fc(x.nombre)}
        style={{ backgroundColor: "#E9E3E9", marginTop: 5, padding: 20,flexDirection: "row" }}
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
    ));
  }