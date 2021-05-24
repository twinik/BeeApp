import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Bienvenido from '../Views/Presentacion/Bienvenido'
import Info1 from '../Views/Presentacion/Info'
import Info2 from '../Views/Presentacion/Info2'

const Presentacion= createStackNavigator();

export default function PresentacionStackScreen ({navigation}) {

    return(
        <Presentacion.Navigator headerMode="none" >
        
            <Presentacion.Screen 
            name="Bienvenido" 
            component={Bienvenido} 
            options={{animationEnabled:false}
            }
            />
        
            <Presentacion.Screen
            name="Info1"
            component={Info1}
            options={{animationEnabled:false}}
            />

            <Presentacion.Screen
            name="Info2"
            component={Info2}
            options={{animationEnabled:false}}
            />
            
        </Presentacion.Navigator>
    )

}