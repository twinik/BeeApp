import  React from 'react';
import { TouchableOpacity, Text,StyleSheet,Image,View} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';

class UserCard extends React.Component  { 
    render(){
    return(
        <View style={estilos.container}>
            <FontAwesome5 name="user-alt" size={50} color="white" />
        </View>
    );}
}

  export default UserCard;

  const estilos = StyleSheet.create({
    container:{
        width:100,
        height:100,
        backgroundColor:'#9E5FB0',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50
              
    },
    texto:{
        color:'#fff'
    }
  });