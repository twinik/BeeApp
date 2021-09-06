import React from 'react'
import { View, Text, ScrollView,StyleSheet } from "react-native";

export default function BodyData() {
    return (
        <View style={estilos.container}>
            <Text>HeaderData</Text>
        </View>
    )
}


const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'red'
    },
});