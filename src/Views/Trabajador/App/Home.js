import React from "react";
import { View, Text, Button } from "react-native";


export default function Bienvenido  ({ navigation }) {
    
  return(
    <View style={{flex:1,marginTop:30}}>
      <Text>Home Trabajador</Text>
      <Button title="Crear Cuenta"  onPress={() => navigation.navigate ("SignIn")}></Button>
      <Button title="Crear Cuenta"  onPress={() => navigation.navigate  ("SignUpIndex")}></Button>
    </View>
  )
 }

 