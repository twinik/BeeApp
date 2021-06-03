import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, StyleSheet, Button } from "react-native";
import SignIn from '../../Views/General/SingIn'
import SignUp from './SingUp/RedirectSignUp'
import IndexSignUp from '../../Views/General/IndexSignUp'
const AuthStack= createStackNavigator();

import aux from '../../Views/General/Inicio'

export default function AuthStackScreen () {

   

    return(
        <AuthStack.Navigator headerMode="none" >
        
        
            <AuthStack.Screen 
            name="Inicio"
            component={aux}
            options={{title:"Inicio"}}
            />   

            <AuthStack.Screen 
            name="SignIn"
            component={SignIn}
            options={{title:"Sign In"}}
            />
            
            <AuthStack.Screen 
            name="SignUpIndex"
            component={IndexSignUp}
            options={{title:"SignUpIndex"}}
            />   

            <AuthStack.Screen 
            name="SignUp"
            component={SignUp}
            options={{title:"Sign Up"}}
            />
            
    
        </AuthStack.Navigator>
    )

}