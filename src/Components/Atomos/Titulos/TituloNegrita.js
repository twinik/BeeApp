import React from 'react'
import {Text} from 'react-native'
export default function TituloNegrita({children, style}) {
    return (
        <Text style={{fontWeight:'bold',fontSize:17,...style}}>{children}</Text>
    )
}
