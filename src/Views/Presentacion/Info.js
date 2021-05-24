
import React from "react";
import { View, Text, StyleSheet, Button,Dimensions } from "react-native";
import LottieView from 'lottie-react-native';

const windowHeight = Dimensions.get('window').height;


export default function Info  ({ navigation }) {

  

  

  return(
    <View style={{flex:1,marginTop:windowHeight/10}}>
      <View style={{flex:3}}>
        <LottieView source={require('../../../assets/Animaciones/gifPhone.json')} autoPlay loop style={{marginTop:20}} /> 
      </View>
      <View style={{flex:2}}>
        <Text style={style.titulo}>Cualquier trabajo que {"\n"}usted necesite</Text>
        <Text style={style.subTitulo}>En Servbee puede encontrar el trabajador {"\n"} ideal para el problema que usted{"\n"} necesite resolver</Text>
        <Button title="siguiente" onPress={() => navigation.navigate('Info2')} />
      </View>
    </View>
  )
 }

const style=StyleSheet.create({
  container:{
    flex: 1,
  },
  containerTexto:{
    flex: 1,
  },
  titulo:{
    fontSize: 28,
    textAlign: 'center',
  },
  subTitulo:{
    marginTop:15,
    fontSize: 15,
    textAlign: 'center',
  }
})