import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
const RedirectSignUpStack= createStackNavigator();
import SingUpCliente from './SingUpCliente'
import SingUpTrabajador from './SingUpTrabajador'
export default function RootStackScreen ({route,navigation}) {

    const {  rol } = route.params;

    return(
        
        
        rol == "Cliente" ? (<SingUpCliente/>) : (<SingUpTrabajador/>)
            
            
    
       
    )

}