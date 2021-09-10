import React from "react";
import { View, ScrollView, Text, TouchableOpacity, Image } from "react-native";
import { TituloNegrita } from "../../../../../Components/Atomos/Titulos/TitulosIndex";
import SafeAreaViewHybrid from "../../../../../Components/Atomos/SafeAreaViewHybrid";
import { UserImage } from "../../../../../Components/Atomos/Cards/CardMensaje/Index";
import { Fontisto } from "@expo/vector-icons";
export default function Home() {
  return (
    <SafeAreaViewHybrid style={{backgroundColor:'#EEEEEE',justifyContent:'center'}}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 15,
          paddingTop: 20,
          paddingBottom: 50,
          backgroundColor: "#2a2b2d",
        }}
      >
        <Fontisto
          name="bell"
          size={24}
          color="white"
          style={{ marginLeft: "auto" }}
        />
        <View style={{ flexDirection: "row", width: "100%", marginTop: 25 }}>
          <UserImage
            style={{ width: 65, height: 65, borderRadius: 50 }}
            uri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4yvLSX6Y5O14sFJ-CdJ3K3nzRfuqrW0rs7Q&usqp=CAU"
            status={true}
          />
          <View style={{ marginLeft: 20, paddingVertical: 6 }}>
            <TituloNegrita style={{ color: "white", fontSize: 20 }}>
              gfalotico
            </TituloNegrita>
            <Text style={{ color: "white", marginTop: 8 }}>
              Saldo Personal <Text style={{ fontWeight: "bold" }}>US$0</Text>
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          width: "90%",
          backgroundColor: "white",
          height: 50,
          top:-20,
          borderRadius:10,
          left: "5%"
        }}
      ></View>
      <ScrollView
        style={{ flex: 1, backgroundColor: "#EEEEEE" }}
        contentContainerStyle={{}}
      ></ScrollView>
    </SafeAreaViewHybrid>
  );
}
