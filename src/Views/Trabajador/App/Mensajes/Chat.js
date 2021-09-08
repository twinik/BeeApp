import React from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import SafeAreaViewHybrid from "../../../../Components/Atomos/SafeAreaViewHybrid";
import { TituloNegrita } from "../../../../Components/Atomos/Titulos/TitulosIndex";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import Mensaje from "../../../../Components/Atomos/Cards/Mensaje";
export default function MensajeIndividual({ navigation,route }) {
  const  autor  = route.params;
    const [time, setTime] = React.useState(null);
    React.useEffect(() => {
        // El offset es la diferencia horaria del pais respecto al UTC
        setTime(calcTime("Argentina", -3))
    },[])
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
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios" size={24} color="black" />
        </TouchableOpacity>
        <View style={{ alignItems: "center" }}>
          <TituloNegrita>Bandeja de entrada</TituloNegrita>
          <Text style={{ color: "#9a9a9a" }}>Hora local {time}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <MaterialCommunityIcons
            name="clipboard-text-outline"
            size={24}
            color="black"
            style={{ marginRight: 15 }}
          />
          <Ionicons name="ellipsis-horizontal-sharp" size={24} color="black" />
        </View>
      </View>
      <ScrollView style={{ flex: 1 }}>
        <Mensaje autor={autor}/>
      </ScrollView>
    </SafeAreaViewHybrid>
  );
}


function calcTime(city, offset) {
    // creamos el objeto Date (la selecciona de la máquina cliente)
    var d = new Date();
 
    // lo convierte  a milisegundos
    // añade la dirferencia horaria
    // recupera la hora en formato UTC
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
 
    // crea un nuevo objeto Date usando la diferencia dada.
    var nd = new Date(utc + (3600000*offset));
    var extra =nd.getHours() > 12 ? "p. m" : "a. m"; 
    // devuelve la hora como string.
    return nd.getHours() + ":" + nd.getMinutes()+ " "+extra
}