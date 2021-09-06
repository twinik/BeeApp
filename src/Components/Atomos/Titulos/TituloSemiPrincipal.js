import React, { Children } from 'react'
import { Text,ViewPropTypes } from "react-native";

export default function TituloSemiPrincipal({children,style}) {
    return (
        <Text style={{color:'#0e0e0e',fontSize:22,fontWeight:'bold',...style}}>{children}</Text>
    )
}
TituloSemiPrincipal.propTypes = {
    style: ViewPropTypes.style
  };