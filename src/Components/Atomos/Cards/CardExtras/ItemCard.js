import React from 'react'
import { View, Text, StyleSheet } from "react-native";

export default function ItemCard({titulo,valor,signValue,valorExtra,style}) {
    const extra =  valorExtra < 0 ? (<Text style={{color:"#787c85"}}> (-${valorExtra*-1})</Text>) : valorExtra || valorExtra === 0 ? (<Text style={{color:"#787c85"}}> (${valorExtra})</Text>) : ""
    return (
        <View style={{...style}} >
            <Text style={{color:'#404144'}}>{titulo}</Text>
            <Text style={{color:'#0e0e0e',fontWeight:'bold',fontSize:17}}>{signValue}{valor}{extra}</Text>
        </View>
    )
}
