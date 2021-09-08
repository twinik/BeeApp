import React from 'react'
import { View, ScrollView, Text, Image } from "react-native";

export default function Aprobado({colorPrincipal,colorSecundario,label}) {
    return (
        <View style={{backgroundColor:colorPrincipal,justifyContent:'center',alignItems:'center',borderRadius:5,width:80,height:20}}>
            <Text style={{textTransform:'uppercase',fontSize:10,fontWeight:'bold',color:colorSecundario}}>{label}</Text>
        </View>
    )
}
