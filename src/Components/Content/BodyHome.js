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
            <View style={{backgroundColor: 'lightgrey'}}>
                <Image source={{uri: 'https://gst-online.com/wp-content/uploads/2018/07/Discount-1.png'}}/>
            </View>
          </View>
          <View style={styles.seccionListView}>
            <Text>RUBROS</Text>
          </View>
          <View style={styles.seccionCategorias}>
              <RubrosContainer/>
          </View>
          <View style={styles.seccionCategorias}>
              <RubrosContainer/>
          </View>
          <View style={styles.seccionCategorias}>
              <RubrosContainer/>
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