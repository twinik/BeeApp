import React from "react";
import { View,Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
const DrawerCliente = createDrawerNavigator();
import Profile from "../../Views/Cliente/App/Profile";
import HomePro from "../../Views/Cliente/App/HomePro";
import Buscador from "../../Views/Cliente/App/Buscador";
import { Ionicons, Foundation, FontAwesome } from "@expo/vector-icons";
import MenuCliente from "../../Components/Menu/MenuCliente";
import AppContext from "../../Context/AppContext";

function setearColors(focused) {
  return focused ? "#AE81F4" : "#7936E4";
}


//crear una funcion llamada loader para mostrar el loading
function Loader() {
  
    return(
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Loading</Text>
      </View>
    )
  }

export function App() {
  return (
    <DrawerCliente.Navigator
      drawerContent={(props) => <MenuCliente {...props} />}
    >
      <DrawerCliente.Screen
        name="HomePro"
        component={HomePro}
        options={{
          title: "Inicio",
          gestureEnabled: true,
          gestureDirection: "horizontal",
          drawerIcon: ({ focused, size }) => (
            <Foundation name="home" size={size} color={setearColors(focused)} />
          ),
        }}
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
          title: "Perfil",
          drawerIcon: ({ focused, size }) => (
            <Ionicons name="person" size={size} color={setearColors(focused)} />
          ),
        }}
      />
    </DrawerCliente.Navigator>
  );
}

export default function(){
const { User } = React.useContext(AppContext);
  return(
    User != null ?<App /> : <Loader/>
  )

}
