import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
const StackContrato = createStackNavigator();
import Contratos from "./Contratos";
import ContratoIndividual from "./ContratoIndividual";
export default function Index() {
  return (
    <StackContrato.Navigator headerMode="none">
      <StackContrato.Screen
        name="Contratos"
        component={Contratos}
        options={{ title: "Buscador" }}
      />
      <StackContrato.Screen
        name="Contrato"
        component={ContratoIndividual}
        options={{ title: "Buscador" }}
      />
    </StackContrato.Navigator>
  );
}
