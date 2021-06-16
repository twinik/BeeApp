import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  Image,
  TouchableOpacity,
  Touchable,
  ImageBackground,
  StatusBar
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Card from "../../Components/card";
import Card2 from "../../Components/card2";
import BotonSiguiente from "../../Components/BotonSiguiente";
const { width, height } = Dimensions.get("window");

export default function SignUp({ navigation }) {
  return (
    <ImageBackground
      style={estilos.container}
      source={require("../../../assets/wallpaper.png")}
    >
      <View style={estilos.containerTexto}>
        <Text style={estilos.titulo}>Crea tu{"\n"}cuenta</Text>
      </View>
        <View style={estilos.contenedorCards}>
          <Card
            title="Cliente"
            onPress={() => navigation.navigate("SignUp", { rol: "Cliente" })}
            image="Cliente"
          ></Card>
          <Card2
            title="Trabajador"
            onPress={() => navigation.navigate("SignUp", { rol: "Trabajador" })}
            image="as"
          ></Card2>
        </View>
        <View style={estilos.containerVolver}>
          <TouchableOpacity
            style={estilos.Boton}
            onPress={() => navigation.goBack()}
          >
            <AntDesign name="left" size={32} color="#9E5FB0" />
          </TouchableOpacity>
        </View>
    </ImageBackground>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  containerTexto: {
    flex: 4,
    justifyContent: "flex-end",
    marginHorizontal: "10%",
  },
  sobra: {
    flex: 2,
  },
  containerView: {
    flex: 3,
    marginHorizontal: 20,
  },
  contenedorCards: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: "10%",
  },
  titulo: {
    fontSize: 48,
  },
  subtitulo: {
    textAlign: "center",
    fontSize: 20,
  },
  InicioSubtitulo: {
    color: "#1679C0",
  },
  containerVolver: {
    flex: 1,
    justifyContent: "flex-end"
  },
  Boton: {
    marginBottom: 20,
    marginHorizontal: 20,
  },
});
