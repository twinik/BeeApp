import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
const StackMensajes = createStackNavigator();
import Mensajes from "./Mensajes";
import Mensaje from './Chat'
export default function Index() {
  return (
    <StackMensajes.Navigator headerMode="none">
      <StackMensajes.Screen
        name="Mensajes"
        component={Mensajes}
        options={{ title: "Buscador" }}
      />
      <StackMensajes.Screen
        name="Mensaje"
        component={Mensaje}
        options={{ title: "Buscador" }}
      />
    </StackMensajes.Navigator>
  );
}
