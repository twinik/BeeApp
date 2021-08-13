import React from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  SafeAreaView,
  Text,
  ScrollView,
  Image
} from "react-native";

import RubrosContainer from '../RubrosContainer'
import BotonVerRubros from '../Botones/BotonVerRubros'
import ListViewRubros from '../Menu/ListViewRubros'

import MyText from '../MyText'

const BodyHome = () => {
    return(
    <ScrollView>
          <View style={styles.seccionCategorias}>
            <View style={{ flexDirection: "row", marginVertical: 5 }}>
              <Text style={styles.titulo}>Categorias</Text>
              <BotonVerRubros title="Ver todos" />
            </View>
            <RubrosContainer />
          </View>
          <View style={styles.seccionCarousel}>
            <View style={{backgroundColor: 'lightgrey', justifyContent: 'center', alignItems: 'center', borderRadius: 25, margin: 10}}>
                <Image style={{width: 200, height: 100}} source={{uri: 'https://gst-online.com/wp-content/uploads/2018/07/Discount-1.png'}}/>
                <MyText text="publi" fontStyle='QuicksandBold'/>
            </View>
          </View>
          <View style={styles.seccionListView}>
            <ListViewRubros/>
          </View>
          
    </ScrollView>
    )
}

export default BodyHome

const styles = StyleSheet.create({
    seccionCategorias: {
        flex: 1,
        backgroundColor: "red",
      },
      seccionCarousel:{
        flex: 1,
        backgroundColor: 'pink'
      },
      seccionListView: {
        flex: 1,
        backgroundColor: "orange",
      },

      titulo: {
        flex: 1,
        marginLeft: 10,
        fontSize: 23,
      },
})