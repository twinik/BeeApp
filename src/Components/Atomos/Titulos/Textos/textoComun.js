import React from 'react'
import {Text} from 'react-native'
export default function Subtitulo({children, style}) {
    return (
        <Text style={{fontSize:10,letterSpacing:1,...style}}>{children}</Text>
    )
}
