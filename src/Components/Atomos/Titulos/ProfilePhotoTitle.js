import React from 'react'
import { View,StyleSheet,ViewPropTypes} from "react-native";
import TituloNegrita from './TituloNegrita'
import ImageProfile from '../ImageProfile';

export default function ProfilePhotoTitle({uri,label,style,containerStyle,imageStyle,labelStyle,imageSize}) {
    return (
        <View style={[estilos.container,containerStyle]}>
            <ImageProfile uri={uri} size={imageSize?imageSize:30} style={{marginRight:10,...imageStyle}}/>
            <TituloNegrita style={{...labelStyle}}>{label}</TituloNegrita>
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

ProfilePhotoTitle.propTypes = {
    containerStyle: ViewPropTypes.style,
    imageStyle: ViewPropTypes.style,
    
  };