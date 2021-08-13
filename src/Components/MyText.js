import React from 'react'
import {Text} from 'react-native'
import { useFonts } from 'expo-font';

const MyText = ({text, fontStyle, style}) =>{
    const [loaded] = useFonts({
        Bold: require('../../assets/Fonts/Quicksand/Quicksand-Bold.ttf'),
        Light: require('../../assets/Fonts/Quicksand/Quicksand-Light.ttf'),
        Medium: require('../../assets/Fonts/Quicksand/Quicksand-Medium.ttf'),
        Regular: require('../../assets/Fonts/Quicksand/Quicksand-Regular.ttf'),
        SemiBold: require('../../assets/Fonts/Quicksand/Quicksand-SemiBold.ttf'),
      });

      if (!loaded) {
        return <Text>{text}</Text>;
      }

    return(
        <Text style={[style, {fontFamily: fontStyle == null ? 'Regular' : fontStyle}]}>{text}</Text>
    )
}

export default MyText;