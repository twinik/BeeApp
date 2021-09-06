import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TituloSemiPrincipal } from "../../Titulos/TitulosIndex";
export default function CardExtras({children,titulo,cardStyle}) {
  return (
    <View style={{ paddingHorizontal: 5 }}>
      <View style={{ flexDirection: "row", marginTop: 20,marginBottom:10 }}>
        <TituloSemiPrincipal>{titulo}</TituloSemiPrincipal>
      </View>
      <View style={{ flexDirection: "row",backgroundColor:'#ffffff',paddingHorizontal:10,borderRadius:10,paddingVertical:20,...cardStyle}}>
        {children}
      </View>
    </View>
  );
}
