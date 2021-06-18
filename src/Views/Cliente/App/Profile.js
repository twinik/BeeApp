import React from "react";
import { View, Text, StyleSheet, Button ,Dimensions} from "react-native";
import AppContext from "../../../Context/AppContext";


export default function Profile({ navigation }) {

  const { SignOut } = React.useContext(AppContext);

    return(
    <View style={{flex:1}}>
      <Text>Profile</Text>
      <Button  title="Drawer" onPress={() => navigation.toggleDrawer()} />
      <Button  title="Sign Out" onPress={() => SignOut()}/>
      
    </View>
    )
}