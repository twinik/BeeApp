import React from "react";
import { Text, TouchableOpacity, Image, View } from "react-native";
import CardRubroBusqueda from "../Cards/CardRubroBusqueda";
import MyText from '../MyText'

export default function Busqueda({ searchQuery, Rubros, fc }) {
  var rubrosFiltrados = Rubros.filter((rubro) =>
    rubro.nombre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return rubrosFiltrados.length == 0 ? (
    <View style={{alignItems: 'center', marginHorizontal: 30, marginVertical: 15}}>
      <MyText text="No se han encontrado resultados para tu busqueda" fontStyle="Medium"/>
    </View>
  ) : (
    rubrosFiltrados.map((x) => <CardRubroBusqueda fc={fc} rubros={x} />)
  );
}
