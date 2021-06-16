import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  StatusBar
} from "react-native";
import BotonGrande from "./../../Components/BotonGrande";

export default function Bienvenido({ navigation }) {
  StatusBar.setBackgroundColor('white', true);
  return (
    <View style={estilos.container}>
      <View style={estilos.containerImage}>
        <Image
          source={require("../../../assets/logo.png")}
          style={estilos.logo}
        />
      </View>

      <View style={[estilos.containerTexto]}>
        <Text style={estilos.titulo}>
          Encontrá {"\n"} cualquier servicio {"\n"}que necesites en{"\n"}
          cualquier momento
        </Text>
        <BotonGrande
          title="Crear Cuenta"
          onPress={() => navigation.navigate("SignUpIndex")}
        ></BotonGrande>
      </View>
      <View style={estilos.row}>
        <Text>¿Ya tenes una cuenta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
          <Text style={estilos.link}>Iniciar sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  logo: {
    width: 120,
    height: 120,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 30,
    alignItems: "center",
    marginTop: StatusBar.currentHeight,
  },
  containerImage: {
    flex: 3,
    justifyContent: "center",
  },
  containerTexto: {
    flex: 4,
  },
  row: {
    flex: 0.6,
    flexDirection: "row",
  },
  titulo: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: "10%",
  },
  link: {
    color: "#1679C0",
    marginLeft: 4,
  },
});
