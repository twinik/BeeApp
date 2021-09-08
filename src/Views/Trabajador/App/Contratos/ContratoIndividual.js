import React from "react";
import { View, ScrollView, TouchableOpacity, Text } from "react-native";
import { TituloNegrita } from "../../../../Components/Atomos/Titulos/TitulosIndex";
import SafeAreaViewHybrid from "../../../../Components/Atomos/SafeAreaViewHybrid";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
export default function ContratoIndividual({ navigation }) {
  return (
    <SafeAreaViewHybrid>
      <View
        style={{
          flex: 0.08,
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          paddingHorizontal: 20,
          borderBottomColor: "#E5E5E5",
          borderBottomWidth: 1,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios" size={24} color="black" />
        </TouchableOpacity>
        <TituloNegrita>Contrato</TituloNegrita>
        <Ionicons name="ellipsis-horizontal-sharp" size={24} color="black" />
      </View>
      <ScrollView
        style={{ flex: 1, backgroundColor: "#EEEEEE" }}
        contentContainerStyle={{}}
      ></ScrollView>
    </SafeAreaViewHybrid>
  );
}
