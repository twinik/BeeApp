import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign,MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import MyTabBar from "../../Components/Atomos/TabBar";
import {Home,Mensajes,Contratos,Perfil} from '../../Views/Trabajador/App/index'
const AppTrabajador = createBottomTabNavigator();

export default function App() {
    const activeColor = '#7936E4';
  return (
    <AppTrabajador.Navigator
      headerMode="none"
      screenOptions={{
        headerShown: false,
        tabBarStyle: { height:50 },
      }}
      tabBar={props => <MyTabBar {...props} />}
    >
      <AppTrabajador.Screen
        name="Home"
        component={Home}
        options={{ title: 'none',tabBarIcon: ({ focused,size }) => (<AntDesign name="home" size={size} color={focused ? activeColor : "#282a36"} /> )}}
      />
      <AppTrabajador.Screen
        name="Mensajes"
        component={Mensajes}
        options={{ title: "",tabBarIcon: ({ focused,size }) => (<MaterialCommunityIcons name="email-outline" size={size} color={focused ? activeColor : "#282a36"} /> )}}
      />
      <AppTrabajador.Screen
        name="Pedidos"
        component={Contratos}
        options={{ title: "",tabBarIcon: ({ focused,size }) => ( <MaterialCommunityIcons name="clipboard-text-outline" size={size} color={focused ? activeColor : "#282a36"} />)}}
      />
      <AppTrabajador.Screen
        name="Perfil"
        component={Perfil}
        options={{ title: "",tabBarIcon: ({ focused,size }) => (<FontAwesome5 name="user-circle" size={size} color={focused ? activeColor : "#282a36"} />)}}
      />
    </AppTrabajador.Navigator>
  );
}
