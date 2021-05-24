import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
const SingUpTrabajador= createStackNavigator();
import Datos from '../../../Views/Trabajador/SignUp/Datos'
export default function RootStackScreen () {

   

    return(
        <SingUpTrabajador.Navigator headerMode="none">
        
            <SingUpTrabajador.Screen 
            name="SignUpInde"
            component={Datos}
            options={{title:"SignUpInde"}}
            />   
            
    
        </SingUpTrabajador.Navigator>
    )

}