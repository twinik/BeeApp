import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
const SingUpCliente= createStackNavigator();
import Datos from '../../../Views/Cliente/SingUp/Datos'

export default function RootStackScreen () {

   

    return(
        <SingUpCliente.Navigator headerMode="none">
        
            <SingUpCliente.Screen 
            name="SignUpInde"
            component={Datos}
            options={{title:"SignUpInde"}}
            />   
            
    
        </SingUpCliente.Navigator>
    )

}