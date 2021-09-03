import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import AppIndex from './App/AppIndex'
import Auth from './Auth/Auth'
import AppContext from '../Context/AppContext';


export default function RootStackScreen () {

    const {Token}=React.useContext(AppContext)
    return(
        
       Token != null && Token != "Reset" ? <AppIndex  /> : <Auth/>
        
    
    )

}