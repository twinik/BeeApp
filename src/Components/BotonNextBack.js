import  React from 'react';
import { TouchableOpacity, Text,StyleSheet, Dimensions} from 'react-native'
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

class BotonNextBack extends React.Component  { 
    render(){
    return(
      <TouchableOpacity style={[(this.props.type == "Next")? estilos.btnNext : estilos.btnBack, estilos.boton]} onPress={this.props.onPress} >
        <Text style={[estilos.Text,{color: this.props.color}]}>{this.props.title}</Text>
      </TouchableOpacity>
    );}
}

  export default BotonNextBack;

  const estilos = StyleSheet.create({
    boton:{
        alignItems:'center',
        justifyContent:'center',
        padding:10,
        width:windowWidth/2,
        height: windowHeight/15
    },
    Text:{
        fontSize: 16,
        fontWeight:'bold'
    },
    btnNext:{
        backgroundColor:'#7936E4',
        alignItems:'center',
        borderTopWidth: 2,
        borderTopColor: '#7936E4'
    },
      btnBack:{
        backgroundColor:'#fff',
        alignItems:'center',
        borderTopWidth: 2,
        borderTopColor: '#7936E4'
    }
  });