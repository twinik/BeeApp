import React from 'react'
import { View, Text, ScrollView, StyleSheet,ViewPropTypes,TextPropTypes } from "react-native";
import PropTypes from 'prop-types';

export default function CounterCircle({valor,containerStyle,textStyle}) {
    return (
<View style={{justifyContent:'center',borderRadius:20,height:30,width:50,alignItems:'center',borderColor:'#c4c4c4',borderWidth:1.5,...containerStyle}}>
    <Text style={{color:'#b2b2b2'}}>{valor}</Text>
</View>
        )
}


CounterCircle.propTypes = {
    valor: PropTypes.number,
    containerStyle: ViewPropTypes.style,
};