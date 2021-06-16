import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Slider from "../../../Views/Cliente/SingUp/Slider";
import Datos from "../../../Views/Cliente/SingUp/Datos";
import Datos2 from "../../../Views/Cliente/SingUp/Datos2";
import Verify from "../../../Views/Cliente/SingUp/Verificacion";
import FinRegistro from "../../../Views/General/FinRegistro";
import Documentos from "../../../Views/Cliente/SingUp/Documentos";
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
        name="Datos2"
        component={Datos2}
        options={{ title: "Datos2" }}
      />

      <SingUpCliente.Screen
        name="verify"
        component={Verify}
        options={{ title: "verify" }}
      />

      <SingUpCliente.Screen
        name="Documentos"
        component={Documentos}
        options={{ title: "Documentos" }}
      />
      <SingUpCliente.Screen
        name="finRegistro"
        component={FinRegistro}
        options={{ title: "finRegistro" }}
      />
    </SingUpCliente.Navigator>
  );
}
