import React from "react";
import { View, ScrollView, Text } from "react-native";
import SafeAreaViewHybrid from "../../../Components/Atomos/SafeAreaViewHybrid";
import { TituloNegrita } from "../../../Components/Atomos/Titulos/TitulosIndex";
import { Feather } from "@expo/vector-icons";
import CardMensaje from "../../../Components/Atomos/Cards/CardMensaje/CardMensaje";

export default function Mensajes() {
  return (
    <SafeAreaViewHybrid>
      <View
        style={{ flex: 0.08, justifyContent: "space-between", alignItems: "center" ,flexDirection:'row',paddingHorizontal:20,borderBottomColor:'#E5E5E5',borderBottomWidth:1}}
      >
        <Text style={{fontSize:18,color:'#1dbf73'}}>Editar</Text>
        <TituloNegrita>Bandeja de entrada</TituloNegrita>
        <Feather name="filter" size={24} color="black" />
      </View>
      <ScrollView
        style={{ flex: 1 }}
      >
          <CardMensaje status={true} nombre="Pablo Neruda" uri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmz5wikwbddObEEd67-zhq96r5HeCUU5HFUA&usqp=CAU"/>
          <CardMensaje status={true} nombre="Eduardo Galeano" uri="https://elterritorio1.cdn.net.ar/252/elterritorio1/images/90/69/906928_798902e8149738206ad8ce2159720c332e125330245f4a2d7a21ee0aabc63e1a/lg.webp"/>
      </ScrollView>
    </SafeAreaViewHybrid>
  );
}
