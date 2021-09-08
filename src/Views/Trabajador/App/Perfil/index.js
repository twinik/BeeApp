import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
const StackPerfil = createStackNavigator();
import {Home} from './Views/index'

export default function Index() {
  return (
    <StackPerfil.Navigator headerMode="none">
      <StackPerfil.Screen
        name="Mensajes"
        component={Home}
        options={{ title: "Buscador" }}
      />
    </StackPerfil.Navigator>
  );
}
