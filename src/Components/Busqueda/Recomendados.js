import React from "react";
import { Text, TouchableOpacity, Image, StyleSheet, View } from "react-native";
import CardRubroBusqueda from "../Cards/CardRubroBusqueda";

export default function Recomendados({ Rubros, fc }) {
  return Rubros.map((rubros) => <CardRubroBusqueda fc={fc} rubros={rubros} />);
}
