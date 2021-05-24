import React from 'react'
import { TouchableOpacity,Text,  StyleSheet } from 'react-native'
import { FontAwesome ,FontAwesome5} from '@expo/vector-icons';

export default function card({title,onPress,image}) {


    return (
        <TouchableOpacity style={estilitos.container} onPress={onPress}>
            {image =="Cliente" ? <FontAwesome5 name="user-alt" size={50} color="#9F88BF" /> : <FontAwesome5 name="user-astronaut" size={50} color="#9F88BF" />}
            <Text style={estilitos.titulo}>{title}</Text>
        </TouchableOpacity>
    )
    
}

const estilitos= StyleSheet.create({
    container:{
        width:140,
        height:140,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#D5C9E6',
        margin:20,
        borderRadius:20
    },
    titulo:{
        marginTop:10,
        color:'#8466AD'
    }
})