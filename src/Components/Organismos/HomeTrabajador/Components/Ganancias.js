import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ItemCard from '../../../Atomos/Cards/CardExtras/ItemCard'
export default function Ganancias() {
  return (
    <>
      <View style={{ flex: 1 }}>
        <ItemCard titulo="Saldo Personal" valor={0} signValue="$" />
        <ItemCard
          titulo="Precio Promedio Ventas"
          valor={0}
          signValue="$"
          style={{ marginVertical: 20 }}
        />
        <ItemCard titulo="Liquidacion Pendiente" valor={0} signValue="$" />
      </View>
      <View style={{ flex: 1 }}>
        <ItemCard titulo="Ganancias en Septiembre" valor={0} signValue="$" />
        <ItemCard
          titulo="Pedidos Activos"
          valor={0}
          valorExtra={0}
          style={{ marginVertical: 20 }}
        />
        <ItemCard titulo="Pedidos Cancelados" valor={0} valorExtra={-160} />
      </View>
    </>
  );
}
