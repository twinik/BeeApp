import React from "react";
import { View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
const DrawerCliente = createDrawerNavigator();
import Home from "./Cliente/HomeStack";
import Profile from "./Cliente/ProfileStack";
import EditProfile from "../../Views/Cliente/App/EditProfile";
import Reservas from "../../Views/Cliente/App/Reservas";
import { Ionicons, Foundation, MaterialIcons } from "@expo/vector-icons";
import MenuCliente from "../../Components/Menu/MenuCliente";
import AppContext from "../../Context/AppContext";

function setearColors(focused) {
  return focused ? "#AE81F4" : "#7936E4";
}

//crear una funcion llamada loader para mostrar el loading
function Loader() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Loading</Text>
    </View>
  );
}

export function App() {
  return (
    <DrawerCliente.Navigator
      drawerContent={(props) => <MenuCliente {...props} />}
    >
      <DrawerCliente.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          gestureEnabled: true,
          gestureDirection: "horizontal",
          drawerIcon: ({ focused, size }) => (
            <Foundation name="home" size={size} color={setearColors(focused)} />
          ),
        }}
      />

      <DrawerCliente.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Perfil",
          drawerIcon: ({ focused, size }) => (
            <Ionicons name="person" size={size} color={setearColors(focused)} />
          ),
        }}
      />

      <DrawerCliente.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ title: "EditProfile", presentation: "modal" }}
      />

      <DrawerCliente.Screen
        name="Reservas"
        component={Reservas}
        options={{
          title: "Reservas",
          drawerIcon: ({ focused, size }) => (
            <MaterialIcons
              name="my-library-add"
              size={size}
              color={setearColors(focused)}
            />
          ),
        }}
      />
    </DrawerCliente.Navigator>
  );
}

export default function () {
  const { User } = React.useContext(AppContext);
  return User != null ? <App /> : <Loader />;
}
