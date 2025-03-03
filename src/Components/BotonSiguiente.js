import  React from 'react';
import { TouchableOpacity, Text,StyleSheet} from 'react-native'


class BotonSiguiente extends React.Component  { 
    render(){
    return(
      <TouchableOpacity style={[estilos.boton,this.props.style]} onPress={this.props.onPress} >
        <Text style={estilos.texto}>{this.props.title}</Text>
      </TouchableOpacity>
    );}
}

  export default BotonSiguiente;

  const estilos = StyleSheet.create({
    boton:{
        backgroundColor:"#7936E4",
        padding:10,
        borderRadius:20,
        color:'#fff',
        alignItems:'center',
        width:100
              
    },
    texto:{
        color:'#fff'
    }
  });