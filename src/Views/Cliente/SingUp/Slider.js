import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  StatusBar
} from "react-native";
import BotonGrande from "../../../Components/BotonGrande";
import { Pages } from "react-native-pages";
import Slider1 from "./Slider/Slider1";
import Slider2 from "./Slider/Slider2";
import Slider3 from "./Slider/Slider3";
import MyText from "../../../Components/MyText"
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default function Slider({ navigation }) {
  StatusBar.setBackgroundColor('white', true);
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
            onPress={() => navigation.push("Datos")}
          />
          <MyText
            style={style.textAgree}
            text={` Continuando usted acepta estar de acuerdo con los`}
            fontStyle="Medium"
          />
          <View style={{ flexDirection: "row", marginTop: -10 }}>
            <TouchableOpacity>
            <MyText
            style={style.InicioSubtitulo}
            text={`Términos de Servicio`}
            fontStyle="Medium"
          />
            </TouchableOpacity>
            <MyText
            style={{ fontSize: 12,marginRight:2,marginLeft:2 }}
            text={`y las`}
            fontStyle="Medium"
            />
            <TouchableOpacity>
            <MyText
            style={style.InicioSubtitulo}
            text={`Politicas de Privacidad`}
            fontStyle="Medium"
          />
            </TouchableOpacity>
           
          </View>
        </View>
      </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
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
