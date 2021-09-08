import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Fontisto } from "@expo/vector-icons";
export default function TareasPendientes() {
  return (
    <>
      <View style={{ flexDirection: "row" }}>
        <Text>Estadisticas</Text>
        <Text style={{ marginLeft: "auto" }}>Últimos 7 dias</Text>
      </View>
      <View style={{ flexDirection: "row",marginTop:20 }}>
        <Text>Impresiones</Text>
        <View style={{ flexDirection: "row", marginLeft: "auto" ,justifyContent:'center',alignItems:'center'}}>
          <Text style={{paddingRight:8,fontWeight:"bold"}}>23</Text>
          <Fontisto name="arrow-down" size={11} color="#fa1d28" />
        </View>
      </View>
    </>
  );
}
