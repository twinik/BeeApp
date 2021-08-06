import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import BotonGrande from "../BotonGrande"

class ContentDatosPerfil extends React.Component {
    render(){
        return(
            <View style={styles.contenido}>
            <View style={styles.datos}>
              <View style={[styles.inputLabel, {marginTop: 25}]}>
                <Text style={styles.titleDatos}>Nombre</Text>
                <Text style={styles.datoDatos}>Lionel</Text>
              </View>
    
              <View style={styles.inputLabel}>
                <Text style={styles.titleDatos}>Apellido</Text>
                <Text style={styles.datoDatos}>Messi</Text>
              </View>
    
              <View style={styles.inputLabel}>
                <Text style={styles.titleDatos}>Número de teléfono</Text>
                <Text style={styles.datoDatos}>+54 11 5139-7654</Text>
              </View>
    
              <View style={styles.inputLabel}>
                <Text style={styles.titleDatos}>Correo electronico</Text>
                <Text style={styles.datoDatos}>pulga@gmail.com</Text>
              </View>
    
              <View style={styles.inputLabel}>
                <Text style={styles.titleDatos}>Dirección</Text>
                <Text style={styles.datoDatos}>Av Lionel Andrés 100</Text>
              </View>
    
              <View style={styles.inputLabel}>
                <Text style={styles.titleDatos}>Contraseña</Text>
                <Text style={styles.datoDatos}>*******</Text>
              </View>
    
            </View>
    
            <View style={styles.containerBoton}>
                <BotonGrande
                title="Editar"
                onPress={this.props.onPress}
                />
            </View>
    
          </View>
        )
    }
}

const styles = StyleSheet.create({
    contenido: {
        flex: 2.5,
        backgroundColor: "white",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },  
    containerBoton:{
        flex:1,
        alignItems:'center'
    },
    datos:{
        flex:5,
        marginHorizontal: '8%',
    },
    inputLabel:{
        marginVertical: '2%'
    },
    titleDatos:{
        fontWeight:'bold',
        fontSize:18
    },
    datoDatos:{
        color: '#CC95DA',
        fontSize:16
    },
})

export default ContentDatosPerfil