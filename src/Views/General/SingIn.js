import React from 'react';
import { Platform, View ,TextInput,StyleSheet, Text, KeyboardAvoidingView,Dimensions,TouchableWithoutFeedback,Keyboard,TouchableOpacity} from 'react-native'
import Boton from '../../Components/Boton'
import { AuthContext } from "../../AuthContext";

const {width,height} = Dimensions.get('window')

export default function SignIn  ({navigation,route})  {
    
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const { signIn } = React.useContext(AuthContext);
    
    
        return(
            <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={estilos.container}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                    <View style={estilos.container}>
                        
                        <View style={estilos.sobra}/>
                        <View style={estilos.containerInicioSesion}>
                            <Text style={estilos.InicioSesionTitulo}>Inicio de{"\n"}sesion</Text>
                            <View style={estilos.containerInput}>
                                <TextInput style={estilos.InicioSesionInput} placeholder="Email"></TextInput>
                                <TextInput style={estilos.InicioSesionInput} placeholder="Contraseña"></TextInput>
                                <TouchableOpacity >
                                    <Text style={estilos.InicioSubtitulo}>¿Olvidaste tu Contraseña?</Text>
                                </TouchableOpacity>
                                <Boton title="Iniciar Sesion" onPress={() => signIn("Cliente")}></Boton>
                                
                            </View>
                            <TouchableOpacity style={{flex:.3}} onPress={()=> navigation.goBack()} >
                                    <Text style={estilos.InicioSubtitulo}>Volver ...</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </TouchableWithoutFeedback>
                

            </KeyboardAvoidingView>
            



        )}

        
       const estilos = StyleSheet.create({
           container:{
               flex: 1
           },
           sobra:{
                
                flex: 2,
           },
           containerInicioSesion:{
            
            flex: 3,
            marginHorizontal:20
           },
           containerInput:{
            flex: 2,
            
            alignItems:'center',
            marginRight:'25%'

           },
           InicioSesionTitulo:{
            fontSize:35,
            fontWeight:'bold',
            flex: 1
           },
           InicioSesionInput:{
            
            marginVertical:7,
            width: '100%',
            height: 40,
            borderRadius:9,
            backgroundColor:'#E5E5E5',
            paddingHorizontal:10
           },
           InicioSubtitulo:{
               color: '#1679C0'
           }
       })