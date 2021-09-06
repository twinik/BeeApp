import React from "react";
import ProgressCircle from "react-native-progress-circle";
import { View ,Text} from "react-native";

export default function CirculoProgreso({ value,label,contenido }) {
  return (
    <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
      <ProgressCircle
        percent={value}
        radius={36}
        borderWidth={2}
        color="#1eb971"
        shadowColor="#686868"
        bgColor="#313131"
      >
        <Text
          style={{ fontSize: 18, color: "white", fontWeight: "bold" }}
        >
          {contenido?contenido:value+'%'}
        </Text>
      </ProgressCircle>
      <Text numberOfLines={2} style={{marginTop:10,textAlign:'center',color:'white'}}>{label}</Text>
    </View>
  );
}
