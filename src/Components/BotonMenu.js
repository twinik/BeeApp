


import  React from 'react';
import { TouchableOpacity, Text,StyleSheet} from 'react-native'
import { Feather,MaterialIcons } from '@expo/vector-icons';
 

class BotonMenu extends React.Component  { 
    render(){
    return(
      <TouchableOpacity style={[estilos.boton,this.props.style]} onPress={this.props.onPress} >
        {this.props.tipo == "menu" ? <Feather name="menu" size={35} color="#3E2F82" /> : <MaterialIcons name="support-agent" size={35} color="#3E2F82" />}
      </TouchableOpacity>
    );}
}

  export default BotonMenu;

  const estilos = StyleSheet.create({
    boton:{
        
              
    },
    
  });







/*

<TouchableOpacity
        style={estilos.botoncito}
        onPress={()=> alert("hola")}
      >
         <Feather name="menu" size={24} color="#3E2F82" />

      </TouchableOpacity>
*/ 