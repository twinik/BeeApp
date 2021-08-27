import React, { useState } from "react";
import { View, TextInput, StyleSheet, ScrollView } from "react-native";
import AppContext from "../../Context/AppContext";
import BotonGrande from "../BotonGrande";
import MyText from "../MyText";

export function ContentDatosPerfilEdit() {
  const { User } = React.useContext(AppContext);
  const [mail, setMail] = useState(User.mail);

  return (
    <View style={styles.contenido}>
      <ScrollView>
        <View style={styles.datos}>
          <View style={[styles.inputLabel, { marginTop: 25 }]}>
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
            <TextInput
              onChange={(v) => setMail(v)}
              value={mail}
              placeholderTextColor="#CC95DA"
              style={{
                fontSize: 16,
                borderBottomWidth: 2,
                borderBottomColor: "#7936E4",
                height: 45,
              }}
            />
          </View>

          <View style={styles.inputLabel}>
            <MyText
              style={styles.titleDatos}
              text="Dirección"
              fontStyle="Bold"
            />
            <TextInput
              value="Av Lionel Andrés 100"
              placeholderTextColor="#CC95DA"
              style={{
                fontSize: 16,
                borderBottomWidth: 2,
                borderBottomColor: "#7936E4",
                height: 45,
              }}
            />
          </View>

          <View style={styles.inputLabel}>
            <MyText
              style={styles.titleDatos}
              text="Contraseña"
              fontStyle="Bold"
            />
            <TextInput
              secureTextEntry={true}
              placeholderTextColor="#CC95DA"
              style={{
                fontSize: 16,
                borderBottomWidth: 2,
                borderBottomColor: "#7936E4",
                height: 45,
              }}
            />
          </View>
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

export default ContentDatosPerfilEdit;
