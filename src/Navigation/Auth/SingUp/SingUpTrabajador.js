import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
const SingUpTrabajador = createStackNavigator();
import Datos from "../../../Views/Trabajador/SignUp/Datos";
import slider from "../../../Views/Trabajador/SignUp/slider";
import verify from "../../../Views/Trabajador/SignUp/Verificacion";
import fotoPerfil from "../../../Views/Trabajador/SignUp/FotoPerfil";
import direccion from "../../../Views/Trabajador/SignUp/Direccion";
import servicio from "../../../Views/Trabajador/SignUp/Servicio";
import documentos from "../../../Views/Trabajador/SignUp/Documentos";

import finRegistro from "../../../Views/General/FinRegistro";
export default function RootStackScreen() {
  return (
    <SingUpTrabajador.Navigator headerMode="none">
      <SingUpTrabajador.Screen
        name="slider"
        component={slider}
        options={{ title: "slider" }}
      />
      <SingUpTrabajador.Screen
        name="datos"
        component={Datos}
        options={{ title: "datos" }}
      />
      <SingUpTrabajador.Screen
        name="verify"
        component={verify}
        options={{ title: "verify" }}
      />
      <SingUpTrabajador.Screen
        name="fotoPerfil"
        component={fotoPerfil}
        options={{ title: "fotoPerfil" }}
      />
      <SingUpTrabajador.Screen
        name="direccion"
        component={direccion}
        options={{ title: "direccion" }}
      />
      <SingUpTrabajador.Screen
        name="servicio"
        component={servicio}
        options={{ title: "servicio" }}
      />
      <SingUpTrabajador.Screen
        name="documentos"
        component={documentos}
        options={{ title: "documentos" }}
      />
      <SingUpTrabajador.Screen
        name="finRegistro"
        component={finRegistro}
        options={{ title: "finRegistro" }}
      />
    </SingUpTrabajador.Navigator>
  );
}
