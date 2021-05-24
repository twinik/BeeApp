import React from "react";
import { KeyboardAvoidingView,TouchableWithoutFeedback ,Keyboard,Platform,StyleSheet,View,Text,TextInput} from "react-native";
import BotonMenu from '../../../Components/BotonMenu'
import CardMenu from '../../../Components/cardMenu'
export default function Bienvenido  ({ navigation }) {
    
  return(
    

    <KeyboardAvoidingView
    enabled={false}
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={estilos.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <View style={estilos.container}>

          <View style={estilos.navbar}>
            <BotonMenu onPress={() => navigation.toggleDrawer()} tipo="menu" ></BotonMenu>
            <BotonMenu onPress={() => alert("hg")} tipo="ayuda" ></BotonMenu>
          </View>
          <View style={estilos.containerTexto}>
            <Text style={estilos.texto}>Buenos Dias ,¿Que estas buscando hoy?</Text>

            <TextInput style={estilos.input} placeholder="Buscar"  ></TextInput>
          </View>
          <View style={estilos.containeRubros}>

            <View style={estilos.containerCard}>
              <CardMenu tipo="1" name="electrical-services"/>
              <CardMenu tipo="2" name="cleaning-services"/>
            </View>

            <View style={estilos.containerCard2}>
              <CardMenu tipo="3" name="baby-changing-station"/>
              <CardMenu tipo="4" name="format-paint"/>
            </View>

          </View>

        </View>

      </TouchableWithoutFeedback>
                
                

    </KeyboardAvoidingView>


  )
 }

 const estilos =  StyleSheet.create({
  "container":{
    backgroundColor:'#ffffff',
    flex:1
  } ,
  
  "navbar":{
    flex:1,
   
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginHorizontal:20
  },
  "containerTexto":{
    flex:2,
    
  },
  "containeRubros":{
    flex:3,
    
    alignItems:'center'
    
  },
  containerCard:{
    flex: 1,
   
    flexDirection:'row',
    alignItems:'center'
    
  },
  containerCard2:{
    flex: 1,
    
    flexDirection:'row',
    alignItems:'center'
    
  },
  "texto":{
      fontSize:35,
      textAlign:'center',
      marginHorizontal:40
  },
  input: {
    marginTop:30,
    height: 40,
    margin: 12,
    borderWidth: 1,
    marginHorizontal:50,
    borderRadius:15,
    borderColor:'#f4f4f4',
    backgroundColor:'#f4f4f4',
    padding:13
  } ,
  
  


})