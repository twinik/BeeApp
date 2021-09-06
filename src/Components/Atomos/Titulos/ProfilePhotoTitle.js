import React from 'react'
import { View,StyleSheet} from "react-native";
import TituloNegrita from './TituloNegrita'
import ImageProfile from '../ImageProfile';

export default function ProfilePhotoTitle({uri,label,style}) {
    return (
        <View style={[estilos.container,style]}>
            <ImageProfile uri={uri} size={30} style={{marginRight:10}}/>
            <TituloNegrita>{label}</TituloNegrita>
        </View>
    )
}

const estilos = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    }
})