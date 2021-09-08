import React from "react";
import { View, ImageBackground } from "react-native";

export default function ImageProfile({ size, uri ,style}) {
  const tamaño = {
    width: size,
    height: size,
  };
  return (
    <View style={{backgroundColor:'red',borderRadius:size/2, ...tamaño,...style}}>
        
      <ImageBackground
        source={{
          uri: uri,
        }}
        style={{flex:1}}
        imageStyle={{ borderRadius: size/2}}
    />
    </View>
  );
}

