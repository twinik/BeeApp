import React from "react";
import MyText from "../../Components/MyText";
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
  StatusBar,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Card from "../../Components/Cards/card";
import Card2 from "../../Components/Cards/card2";
import BotonNextBack from "../../Components/BotonNextBack";
import LottieView from "lottie-react-native";
const { width, height } = Dimensions.get("window");

export default function SignUp({ navigation }) {
  StatusBar.setBackgroundColor("#7936E4", true);
  return (
    <View style={estilos.container}>
      <View style={estilos.containerLottie}>
        <LottieView
          source={require("../../../assets/Animaciones/background.json")}
          autoPlay
          loop
        />
      </View>
      <View style={{ flex: 2 }}>
        <View style={estilos.containerTitulo}>
          
          <MyText
            style={estilos.titulo}
            text="Crea tu cuenta"
            fontStyle="Medium"
          />
        </View>
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
          <AntDesign name="left" size={32} color="#7936E4" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  containerTexto: {
    flex: 4,
    justifyContent: "flex-end",
  },
  containerTitulo: {
    flex: 1,
    justifyContent: "flex-end",
    marginHorizontal: "10%",
  },
  containerLottie: {
    flex: 1,
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
    justifyContent: "flex-end",
  },
  Boton: {
    marginBottom: 20,
    marginHorizontal: 20,
  },
});
