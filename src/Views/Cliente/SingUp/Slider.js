import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import BotonGrande from "../../../Components/BotonGrande";
import { Pages } from "react-native-pages";
import Slider1 from "./Slider/Slider1";
import Slider2 from "./Slider/Slider2";
import Slider3 from "./Slider/Slider3";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default function Slider({ navigation }) {
  return (
      <View style={style.container}>
        <View style={style.containerSlider}>
          <Pages indicatorColor="rgb(158, 95, 176)" indicatorPosition="bottom">
            <Slider1></Slider1>
            <Slider2></Slider2>
            <Slider3></Slider3>
          </Pages>
        </View>

        <View style={style.containerBoton}>
          <BotonGrande
            title="Comenzar"
            onPress={() => navigation.navigate("Datos")}
          />
          <Text style={style.textAgree}>
            Continuando usted acepta estar de acuerdo con los
          </Text>
          <View style={{ flexDirection: "row", marginTop: -10 }}>
            <TouchableOpacity>
              <Text style={style.InicioSubtitulo}>Términos de Servicio</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 12 }}> y las </Text>
            <TouchableOpacity>
              <Text style={style.InicioSubtitulo}>Politicas de Privacidad</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal:10
  },

  containerSlider: {
    flex: 5,
  },
  containerBoton: {
    flex: 1,
    marginTop: 30,
    alignItems: "center",
  },
  textAgree: {
    fontSize: 12,
    marginVertical: 10,
    textAlign: "center",
  },
  InicioSubtitulo: {
    color: "#1679C0",
    fontSize: 12,
  },
});
