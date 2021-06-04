import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Slider from "../../../Views/Cliente/SingUp/Slider";
import Datos from "../../../Views/Cliente/SingUp/Datos";
import Verify from "../../../Views/Cliente/SingUp/Verificacion";

import FinRegistro from "../../../Views/General/FinRegistro";
import Dni from '../../../Views/Cliente/SingUp/Dni'
const SingUpCliente = createStackNavigator();

export default function RootStackScreen() {
  return (
    <SingUpCliente.Navigator headerMode="none">
      <SingUpCliente.Screen
        name="Slider"
        component={Slider}
        options={{ title: "Slider" }}
      />

      <SingUpCliente.Screen
        name="Datos"
        component={Datos}
        options={{ title: "Datos" }}
      />

      <SingUpCliente.Screen
        name="verify"
        component={Verify}
        options={{ title: "verify" }}
      />

      <SingUpCliente.Screen
        name="dni"
        component={Dni}
        options={{ title: "Dni" }}
      />
      <SingUpCliente.Screen
        name="finRegistro"
        component={FinRegistro}
        options={{ title: "finRegistro" }}
      />
    </SingUpCliente.Navigator>
  );
}
