
import React from "react";
import { View, Text, StyleSheet, Button ,Dimensions} from "react-native";
import LottieView from 'lottie-react-native';
import { AuthContext } from "../../AuthContext";

const windowHeight = Dimensions.get('window').height;
export default function Info2  ({ navigation }) {

  const { primeraVez } = React.useContext(AuthContext);

  

  return(
    <View style={{flex:1,marginTop:windowHeight/10}}>
      <View style={{flex:3}}>
      <LottieView source={require('../../../assets/Animaciones/worker.json')} autoPlay loop style={{marginTop:20}} />  
      </View>
      <View style={{flex:2}}>
        <Text style={style.titulo}>Descubre trabajadores  {"\n"}cerca tuyo</Text>
        <Text style={style.subTitulo}>Encuentra las soluciones que usted {"\n"} necesita desde la comodidad {"\n"}de su casa</Text>
        <Button title="siguiente" onPress={() => primeraVez()} />
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