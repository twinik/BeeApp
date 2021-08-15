import React from "react";
import {
  View,
  StyleSheet,
  Button,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import BotonGrande from "./../../Components/BotonGrande";
import MyText from "../../Components/MyText";

export default function Bienvenido({ navigation }) {
  StatusBar.setBackgroundColor("white", true);
  return (
    <View style={estilos.container}>
      <View style={estilos.containerImage}>
        <Image
          source={require("../../../assets/Logos_ServBee/img/1080_png.png")}
          style={estilos.logo}
        />
      </View>

      <View style={[estilos.containerTexto]}>
        <MyText
          style={estilos.titulo}
          text={`Encontrá ${"\n"} cualquier servicio que necesites en cualquier momento`}
          fontStyle="Medium"
        />
        <BotonGrande
          title="Crear Cuenta"
          onPress={() => navigation.navigate("SignUpIndex")}
        ></BotonGrande>
      </View>
      <View style={estilos.row}>
        <MyText text="¿Ya tenes una cuenta?" fontStyle="Medium" />
        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
          <MyText
            style={estilos.link}
            text="Iniciar sesión"
            fontStyle="Medium"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
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
    flex: 5,
    alignItems: "center",
    marginHorizontal: "10%",
  },
  row: {
    flex: 0.6,
    flexDirection: "row",
  },
  titulo: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: "10%",
    color: "black",
  },
  link: {
    color: "#1679C0",
    marginLeft: 4,
  },
});
