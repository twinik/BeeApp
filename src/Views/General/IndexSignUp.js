import React from 'react';
import { StyleSheet, Text, View,Button ,Dimensions,Image , TouchableOpacity, Touchable,ImageBackground} from 'react-native';

import Card from '../../Components/card'


export default function SignUp  ({navigation})  {


    return(
        <View style={estilos.container}>
            <ImageBackground
          style={estilos.container}
          source={require("../../../assets/wallpaper.png")}
        >
            <View style={estilos.containerTexto}>
                <Text style={estilos.titulo}>Crea tu{"\n"}Cuenta</Text>
                <Text style={estilos.subtitulo}>Por favor, elija el{"\n"} tipo de cuenta que desea crear</Text>
            </View>
            <View style={estilos.containerView}>
                
                <View style={estilos.contenedorCards}>
                    <Card title="Cliente" onPress={()=> navigation.navigate("SignUp",{rol:"Cliente"}) } image="Cliente"></Card>
                    <Card title="Trabajador" onPress={()=> navigation.navigate("SignUp",{rol:"Trabajador"}) } image="as"></Card>
                </View>
                <TouchableOpacity style={{flex:.3}} onPress={()=> navigation.goBack()} >
                   <Text style={estilos.InicioSubtitulo}>Volver ...</Text>
                </TouchableOpacity>
            </View>
            </ImageBackground>
        </View>
    )
}

const estilos = StyleSheet.create({
    container:{
        flex: 1,    },
    containerTexto:{
        flex: 3,
        justifyContent:'flex-end',
        marginHorizontal:'5%'
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
     justifyContent:'center',
     alignItems:'center'
     

    },
    titulo:{
     fontSize:35,
     fontWeight:'bold',
    
     
    },
    subtitulo:{
        textAlign:'center',
        fontSize:20
    },
    InicioSubtitulo:{
        color: '#1679C0'
    }
    
})