import React from "react";
import { View, Text } from "react-native";
import UserImage from "./Components/UserImage";

export default function CardMensaje({ uri, nombre, mensaje,status }) {
  return (
    <View style={{ flexDirection: "row",padding:15 }}>
      <UserImage uri={uri} status={status} />
      <View style={{ flex: 1,marginLeft:10 }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{fontWeight:'bold',fontSize:16}}>{nombre}</Text>
          <Text style={{ marginLeft: "auto",color:'#cbcccf' }}>14-ago</Text>
        </View>
        <Text numberOfLines={2} style={{color:'#404144'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sunt vero necessitatibus fugiat, eaque, veritatis odit doloremque iure dicta mollitia suscipit placeat ad.</Text>
      </View>
    </View>
  );
}
