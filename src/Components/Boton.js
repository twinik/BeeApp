import  React from 'react';
import { TouchableOpacity, Text,StyleSheet} from 'react-native'


class Boton extends React.Component  { 
    render(){
    return(
      <TouchableOpacity style={[estilos.boton,this.props.style]} onPress={this.props.onPress} >
        <Text style={estilos.texto}>{this.props.title}</Text>
      </TouchableOpacity>
    );}
}

  export default Boton;

  const estilos = StyleSheet.create({
    boton:{
        backgroundColor:"#9E5FB0",
        marginTop:20,
        padding:10,
        borderRadius:10,
        color:'#fff',
        alignItems:'center',
        width:130
              
    },
    texto:{
        color:'#fff'
    }
  });