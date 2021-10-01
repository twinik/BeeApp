import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ItemCard from '../../../Atomos/Cards/CardExtras/ItemCard'
export default function Ganancias({estadisticas}) {
  return (
    <>
      <View style={{ flex: 1 }}>
        <ItemCard titulo="Saldo Personal" valor={estadisticas.saldo} signValue="$" />
        <ItemCard
          titulo="Precio Promedio Ventas"
          valor={estadisticas.precioPromedio}
          signValue="$"
          style={{ marginVertical: 20 }}
        />
        <ItemCard titulo="Liquidacion Pendiente" valor={estadisticas.liquidacion} signValue="$" />
      </View>
      <View style={{ flex: 1 }}>
        <ItemCard titulo="Ganancias en Septiembre" valor={estadisticas.ganancias} signValue="$" />
        <ItemCard
          titulo="Pedidos Activos"
          valor={estadisticas.pedidos.aprobados}
          valorExtra={0}
          style={{ marginVertical: 20 }}
        />
        <ItemCard titulo="Pedidos Cancelados" valor={estadisticas.pedidos.cancelados} valorExtra={"disabled"} />
      </View>
    </>
  );
}
