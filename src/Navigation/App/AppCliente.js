import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
const DrawerCliente = createDrawerNavigator();
import Home from "../../Views/Cliente/App/Home";
import Profile from "../../Views/Cliente/App/Profile";
import HomePro from "../../Views/Cliente/App/HomePro";
import Buscador from "../../Views/Cliente/App/Buscador";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import MenuCliente from "../../Components/Menu/MenuCliente";

function setearColors(focused) {
  return focused ? "#ABA1D8" : "#8073BB";
}

export default function App() {
  return (
    <DrawerCliente.Navigator
      drawerContent={(props) => <MenuCliente {...props} />}
    >
      <DrawerCliente.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          drawerIcon: ({ focused, size }) => (
            <FontAwesome
              name="home"
              size={size}
              color={setearColors(focused)}
            />
          ),
        }}
      />

      <DrawerCliente.Screen
        name="HomePro"
        component={HomePro}
        options={{ title: "HomePro" }}
      />

      <DrawerCliente.Screen
        name="Buscador"
        component={Buscador}
        options={{ title: "Buscador" }}
      />

      <DrawerCliente.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Profile",
          drawerIcon: ({ focused, size }) => (
            <Ionicons name="person" size={size} color={setearColors(focused)} />
          ),
        }}
      />
    </DrawerCliente.Navigator>
  );
}
