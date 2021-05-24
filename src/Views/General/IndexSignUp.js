import React from 'react';
import { StyleSheet, Text, View,Button ,Dimensions,Image , TouchableOpacity, Touchable} from 'react-native';

import Card from '../../Components/card'


export default function SignUp  ({navigation})  {


    return(
        <View style={estilos.container}>
                        
            <View style={estilos.sobra}/>
            <View style={estilos.containerView}>
                <Text style={estilos.titulo}>Crea tu{"\n"}Cuenta</Text>
                <Text style={estilos.subtitulo}>Por favor, elija su{"\n"} tipo de cuenta</Text>
                <View style={estilos.contenedorCards}>
                    <Card title="Cliente" onPress={()=> navigation.navigate("SignUp",{rol:"Cliente"}) } image="Cliente"></Card>
                    <Card title="Trabajador" onPress={()=> navigation.navigate("SignUp",{rol:"Trabajador"}) } image="as"></Card>
                </View>
                <TouchableOpacity style={{flex:.3}} onPress={()=> navigation.goBack()} >
                   <Text style={estilos.InicioSubtitulo}>Volver ...</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

const estilos = StyleSheet.create({
    container:{
        flex: 1
    },
    sobra:{
         
         flex: 2,
    },
    containerView:{
     
     flex: 3,
     marginHorizontal:20
    },
    contenedorCards:{
     flex: 2,
     flexDirection:'row',
     

    },
    titulo:{
     fontSize:35,
     fontWeight:'bold',
     flex: 1,
     
    },
    subtitulo:{
        textAlign:'center',
        fontSize:20
    },
    InicioSubtitulo:{
        color: '#1679C0'
    }
    
})