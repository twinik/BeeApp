import React from 'react';
import {Linking} from 'react-native'
import {DrawerContentScrollView,DrawerItemList,DrawerItem } from '@react-navigation/drawer';
import { View, Text, StyleSheet, Button ,Image,TouchableOpacity} from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
        <View style={estilos.header}>
            <View style={estilos.containerImg}>
                <View style={estilos.imgPerfil}>
                    <FontAwesome name="user" size={60} color="#8073BB" />
                </View>
            </View>
            <View style={estilos.container}>
                <Text style={estilos.userName}>Galo Falotico</Text>
                <TouchableOpacity onPress={()=> props.navigation.navigate('Profile')}>
                    <Text style={estilos.link}>Editar mi perfil {'>'}</Text>
                </TouchableOpacity>
            </View>
        </View>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Help"
          onPress={() => Linking.openURL('https://mywebsite.com/help')}
        />
      </DrawerContentScrollView>
    );
  }

  const estilos = StyleSheet.create({
      header:{
          flex:1,
          backgroundColor:'#F0F0F0',
          paddingHorizontal:20,
          marginBottom:20,
          height: windowHeight /10*2,
          alignItems:'center',
          flexDirection:'row'
        },
        container:{
            flex: 1
        },
        imgPerfil:{
            backgroundColor:'#D2D2D2',
            borderRadius:50,
            padding: 20,
            justifyContent:'center',
            alignItems:'center',
            width: 100,
            height: 100,
        },
        containerImg:{
            flex: 1,
            justifyContent:'center',
            
            
        },
        userName:{
            fontWeight:'bold',
            fontSize:20
        },
        link:{
            fontSize:12,
            
        }
          
  })