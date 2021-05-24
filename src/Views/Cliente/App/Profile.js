import React from "react";
import { View, Text, StyleSheet, Button ,Dimensions} from "react-native";
import { AuthContext } from "../../../AuthContext";


export default function Profile({ navigation }) {

  const { signOut } = React.useContext(AuthContext);

    return(
    <View style={{flex:1}}>
      <Text>Profile</Text>
      <Button  title="Drawer" onPress={() => navigation.toggleDrawer()} />
      <Button  title="Sign Out" onPress={() => signOut()}/>
      
    </View>
    )
}