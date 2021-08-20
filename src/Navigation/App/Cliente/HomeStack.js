import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import HomePro from "../../../Views/Cliente/App/HomePro";
import Buscador from "../../../Views/Cliente/App/Buscador";
import TrabajadorProfile from "../../../Views/Cliente/App/TrabajadorProfile";
import { Ionicons, Foundation, FontAwesome } from "@expo/vector-icons";

export default function ClienteStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="HomePro" component={HomePro} />
      <Stack.Screen
        name="Buscador"
        component={Buscador}
        options={{ title: "Buscador" }}
      />
      <Stack.Screen
        name="TrabajadorProfile"
        component={TrabajadorProfile}
        options={{ title: "Trabajador Profile" }}
      />
    </Stack.Navigator>
  );
}
