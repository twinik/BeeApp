
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";


export default function Bienvenido  ({ navigation }) {
    
  return(
    <View style={{flex:1,marginTop:30}}>
      <Text>Bienvido a ServBee2</Text>
      <Button title="siguiente" onPress={() => navigation.navigate('Info1')} />
    </View>
  )
 }