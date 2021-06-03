import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Boton from '../../../Components/Boton'


export default function Bienvenido  ({ navigation }) {
    
  return(
    <View style={{flex:1,marginTop:30}}>
      <Text>Trabajador</Text>
      <Boton title="Siguiente" onPress={() => navigation.navigate('verify')} />
    </View>
  )
 }