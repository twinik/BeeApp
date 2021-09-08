import React from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { UserImage } from "./CardMensaje/Index";
export default function Mensaje({ autor }) {
  return (
    <View style={{ flexDirection: "row",flex:1,padding:15 }}>
      <UserImage uri={autor.uri} style={{ width: 40, height: 40 }} disabled/>
      <View style={{ flex:1,paddingLeft:15 }}>
        <View style={{flexDirection:'row'}}>
          <Text style={{fontWeight:'bold'}}>{autor.nombre}</Text>
          <Text style={{marginLeft:10,color:'#7a7e87'}}>08:55</Text>
        </View>
        <Text style={{fontWeight:'200'}}>Hola como estas?</Text>
      </View>
    </View>
  );
}
