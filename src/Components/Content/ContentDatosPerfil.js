import React from "react";
import { View, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import AppContext from "../../Context/AppContext";
import BotonGrande from "../BotonGrande";
import MyText from "../MyText";

export function ContentDatosPerfil() {
  const { User } = React.useContext(AppContext);
  return (
    <View style={styles.contenido}>
      <ScrollView>
        <View style={styles.datos}>
          <View style={[styles.inputLabel, { marginTop: 25 }]}>
            <MyText style={styles.titleDatos} text="Nombre" fontStyle="Bold" />
            <MyText
              style={styles.datoDatos}
              text={User.nombre}
              fontStyle="SemiBold"
            />
          </View>

          <View style={styles.inputLabel}>
            <MyText
              style={styles.titleDatos}
              text="Apellido"
              fontStyle="Bold"
            />
            <MyText
              style={styles.datoDatos}
              text={User.apellido}
              fontStyle="SemiBold"
            />
          </View>

          <View style={styles.inputLabel}>
            <MyText
              style={styles.titleDatos}
              text="Número de teléfono"
              fontStyle="Bold"
            />
            <MyText
              style={styles.datoDatos}
              text="+54 11 5139-7654"
              fontStyle="SemiBold"
            />
          </View>

          <View style={styles.inputLabel}>
            <MyText
              style={styles.titleDatos}
              text="Correo electronico"
              fontStyle="Bold"
            />
            <MyText
              style={styles.datoDatos}
              text={User.mail}
              fontStyle="SemiBold"
            />
          </View>

          <View style={styles.inputLabel}>
            <MyText
              style={styles.titleDatos}
              text="Dirección"
              fontStyle="Bold"
            />
            <MyText
              style={styles.datoDatos}
              text="Av Lionel Andrés 100"
              fontStyle="SemiBold"
            />
          </View>
        </View>

        <View style={styles.containerBoton}>
          <TouchableOpacity />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  contenido: {
    flex: 2,
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  containerBoton: {
    flex: 1,
    alignItems: "center",
    margin: 5,
  },
  datos: {
    flex: 5,
    marginHorizontal: "8%",
  },
  inputLabel: {
    marginVertical: "2%",
  },
  titleDatos: {
    fontSize: 18,
  },
  datoDatos: {
    color: "#CC95DA",
    fontSize: 16,
  },
});

export default ContentDatosPerfil;
