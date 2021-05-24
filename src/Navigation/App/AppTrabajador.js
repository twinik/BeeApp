import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
const AppTrabajador= createStackNavigator();
import Home from '../../Views/Trabajador/App/Home'

export default function App () {

   

    return(
        <AppTrabajador.Navigator headerMode="none">
        
            <AppTrabajador.Screen 
            name="SignUpInde"
            component={Home}
            options={{title:"SignUpInde"}}
            />   
            
    
        </AppTrabajador.Navigator>
    )

}