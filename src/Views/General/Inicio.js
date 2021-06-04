import React from "react";
import { View, Text, StyleSheet, Button ,Image,TouchableOpacity} from "react-native";
import BotonGrande from './../../Components/BotonGrande'

export default function Bienvenido  ({ navigation }) {
    
  return(
    <View style={estilos.container}>
    
        <View style={estilos.containerImage}>
            <Image source={require('../../../assets/splash.png')} style={estilos.logo} />
        </View>

        <View style={[estilos.containerTexto]}>
            <Text style={estilos.titulo}>Encontrá {"\n"} cualquier servicio {"\n"}que necesites en{"\n"}cualquier momento</Text>
            <BotonGrande title="Crear Cuenta"  onPress={() => navigation.navigate("SignUpIndex")}></BotonGrande>
        </View>
       <View style={estilos.row}>
           <Text>¿Ya tenes una cuenta?</Text>
            <TouchableOpacity  onPress={() => navigation.navigate("SignIn")}>
                <Text style={estilos.link}>Inicia Sesion</Text>
            </TouchableOpacity>
       </View>
            
        
       
    </View>
  )
 }


 const estilos=StyleSheet.create({
    logo: {
        
        width: 200,
        height: 200,
      },
      container:{
          flex: 1,
          marginTop:30,
          alignItems:'center'
      },
      containerImage:{
        flex: 3,
        justifyContent:'flex-end'
      },
      containerTexto:{
        flex: 4,
      },
      row:{
          flex: .6,
          flexDirection:'row'
      },
      titulo:{
        fontSize:30,
        textAlign:'center',
        marginBottom:'10%'
      },
      link:{
          color: '#1679C0',
          marginLeft:4
      }

 })