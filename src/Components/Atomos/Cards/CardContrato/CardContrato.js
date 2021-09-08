import React from "react";
import { View, ScrollView, Text, Image, StyleSheet } from "react-native";
import { Row, Column } from "../../Common";
import { IconoTitulo } from "../../Titulos/TitulosIndex";
import { Cancelado } from "../../Estados/index";
import { Ionicons } from "@expo/vector-icons";

export default function CardCotrato() {
  return (
    <View style={estilos.container}>
      <Row>
        <Image
          style={estilos.image}
          source={{
            uri: "https://tsnnecochea.com.ar/wp-content/uploads/2019/05/0c46b1c859554d81685fb9747b5ccbdc-1000inodoro_roto.jpg",
          }}
        />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>$ 200</Text>
          <Text numberOfLines={2} style={{ marginTop: 5, color: "#494a4d" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
            adipisci, excepturi ipsam ntium atque. Necessitatibus, placeat quos
            tenetur quibusdam doloremque hic eius mollitia earum officiis
            nesciunt ex perferendis?
          </Text>
        </View>
      </Row>
      <Row style={estilos.container2}>
        <IconoTitulo
          containerStyle={{ flex: 0 }}
          imageSize={28}
          labelStyle={{ fontWeight: "normal", color: "#787c85", fontSize: 14 }}
          uri="https://elterritorio1.cdn.net.ar/252/elterritorio1/images/90/69/906928_798902e8149738206ad8ce2159720c332e125330245f4a2d7a21ee0aabc63e1a/lg.webp"
          label="Eduardo Galeano"
        />
        <Cancelado />
      </Row>
      <Row style={{justifyContent:'space-between',alignItems:'center',marginTop:10}}>
        <Text style={{ fontWeight: "bold", fontSize: 15 }}>14 ago. 2021</Text>
        <Ionicons name="ellipsis-horizontal-sharp" size={20} color="#787c85" />
      </Row>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    flex: 1,
    marginTop:15,
    marginHorizontal:15
  },
  image: { width: 90, height: 60, borderRadius: 5 },
  container2: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 10,
    borderBottomColor: "grey",
    borderBottomWidth: 0.2,
  },
});
