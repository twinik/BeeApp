import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function CardRequisito({titulo,descripcion,valor,valorMaximo,separador,valorSign}) {
  const borde = separador ? {borderBottomColor:"#4c4c4c",borderBottomWidth:.5,paddingBottom:20,} : {}
  return (
    <View style={{ marginTop: 10,...borde}}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ color: "white",fontSize:15,fontWeight:'bold' }}>{titulo}</Text>
        <Text style={{ color: "#4c9575" }}>{valorSign} {valor} / {valorSign} {valorMaximo}</Text>
      </View>
      <Text style={{ color: "#b1b1b1",marginTop:10,width:'85%'}}>
        {descripcion}
      </Text>
    </View>
  );
}
