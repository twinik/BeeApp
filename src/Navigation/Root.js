import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Presentacion from './Presentacion'
import AppIndex from './App/AppIndex'
import Auth from './Auth/Auth'

const RootStack= createStackNavigator();

export default function RootStackScreen ({userToken,userRol}) {

    
    return(
        <RootStack.Navigator headerMode="none" >
        { userToken != null ? (
            <RootStack.Screen 
            name="App" 
            component={AppIndex} 
            options={{animationEnabled:false}}
            initialParams={{ rol:userRol }}
            />
        ) :   ( <RootStack.Screen
        name="Auth"
        component={Auth}
        options={{animationEnabled:false}}/>
        )
        }
        
    </RootStack.Navigator>
    )

}