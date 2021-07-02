import React from "react";
import { View, Text, StyleSheet, Button ,Dimensions} from "react-native";
import AppContext from "../../../Context/AppContext";
import {obtenerUsuario} from '../../../Firebase/Utils/AuthConexion'

export default function Profile({ navigation }) {
  const {User}=React.useContext(AppContext)
  const { SignOut } = React.useContext(AppContext);
  
  React.useEffect(()=>{
    alert(User.apellido)
  },[])
    return(
    <View style={{flex:1,marginTop:'10%'}}>
      <Text>Profile</Text>
      <View style={{flex:1,backgroundColor:'red',justifyContent:'center',alignItems:'center'}}>
        <Text>{User.nombre}</Text>
        <Text>{User.apellido}</Text>
      </View>
      <Button  title="Drawer" onPress={() => navigation.toggleDrawer()} />
      <Button  title="Sign Out" onPress={() => SignOut()}/>
      
    </View>
    )
}