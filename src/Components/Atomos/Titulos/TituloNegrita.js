import React from 'react'
import {Text,ViewPropTypes} from 'react-native'
import PropTypes from 'prop-types';

export default function TituloNegrita({children, style}) {
    return (
        <Text style={{fontWeight:'bold',fontSize:17,...style}}>{children}</Text>
    )
}



