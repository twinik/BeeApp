import React from "react";
import { View, ScrollView, Text } from "react-native";
import { TituloNegrita } from "../../../../Components/Atomos/Titulos/TitulosIndex";
import SafeAreaViewHybrid from "../../../../Components/Atomos/SafeAreaViewHybrid";
import { Ionicons } from "@expo/vector-icons";
import {Card} from '../../../../Components/Atomos/Cards/CardContrato/index'
export default function Contratos() {
  return (
    <SafeAreaViewHybrid>
      <View
        style={{
          flex: 0.08,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <TituloNegrita>Administrar Contratos</TituloNegrita>
        <Ionicons
          name="ios-filter"
          size={24}
          color="black"
          style={{ position: "absolute", right: 20 }}
        />
      </View>
      <View>
        <View style={{borderBottomColor:'#22c176',borderBottomWidth:4,width:140,justifyContent:'center',alignItems:'center',paddingVertical:10}}>
          <Text style={{color:'#22c176',fontWeight:'bold',fontSize:17}}>Todos ({0})</Text>
        </View>
      </View>
      <ScrollView
        style={{ flex: 1, backgroundColor: "#EEEEEE" }}
        contentContainerStyle={{marginTop:10}}
      >
      <Card/>
      <Card/>
      <Card/>

      </ScrollView>
    </SafeAreaViewHybrid>
  );
}
