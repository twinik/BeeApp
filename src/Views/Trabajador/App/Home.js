import React from "react";
import { View, Text, ScrollView } from "react-native";
import { IconoTitulo } from "../../../Components/Atomos/Titulos/TitulosIndex";
import SafeAreaViewHybrid from "../../../Components/Atomos/SafeAreaViewHybrid";
import {Header,Body} from '../../../Components/Organismos/HomeTrabajador/index'
export default function Home({ navigation }) {
  return (
    <SafeAreaViewHybrid>
      <View style={{flex:0.08,justifyContent:'center',alignItems:'center'}}>
        <IconoTitulo
          label="gfalotico"
          uri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4yvLSX6Y5O14sFJ-CdJ3K3nzRfuqrW0rs7Q&usqp=CAU"
        />
      </View>
      <ScrollView style={{ flex: 1,backgroundColor:'#EEEEEE' }} contentContainerStyle={{height:'150%'}}>
        <Header/>
        <Body/>
      </ScrollView>
    </SafeAreaViewHybrid>
  );
}
