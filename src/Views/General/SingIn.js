import React from "react";
import {
  Platform,
  View,
  TextInput,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  ImageBackground,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import BotonNextBack from "../../Components/BotonNextBack";
import ContainerKeyboardView from "./../../Components/ContainerKeyboardView";
import AppContext from "../../Context/AppContext";
import FormSignIn from "../../Components/Forms/FormSignIn";
import {
  AntDesign,
  FontAwesome5,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Sae, Isao } from "react-native-textinput-effects";

export default function SignIn({ navigation, route }) {
  const [email, setEmail] = React.useState("");
  const [contraseña, setContraseña] = React.useState("");
  /*const { signIn } = React.useContext(AuthContext);*/
  const { SignIn } = React.useContext(AppContext);

  return (
    <ContainerKeyboardView>
      <ImageBackground
        style={estilos.container}
        source={require("../../../assets/wallpaper.png")}
      >
        <>
          <View style={estilos.containerTexto}>
            <Text style={estilos.titulo}>Inicio de{"\n"}sesión</Text>
          </View>
          <View style={estilos.containerContent}>
            <View style={estilos.containerInputs}>
              {/* <FormSignIn /> */}
              <Sae
                label={"Email"}
                iconClass={MaterialIcons}
                iconName={"email"}
                iconColor={"#7936E4"}
                labelStyle={{ color: "#B3B3B3" }}
                inputPadding={16}
                labelHeight={24}
                borderHeight={2}
                autoCorrect={false}
                keyboardType="email-address"
                autoCapitalize={"none"}
                inputStyle={{
                  color: "black",
                  fontSize: 16,
                  fontWeight: "normal",
                }}
                onChangeText={(text) => setEmail(text)}
              />

              <Sae
                label={"Contraseña"}
                iconClass={MaterialCommunityIcons}
                iconName={"form-textbox-password"}
                iconColor={"#7936E4"}
                labelStyle={{ color: "#B3B3B3" }}
                inputPadding={16}
                labelHeight={24}
                borderHeight={2}
                autoCorrect={false}
                keyboardType="default"
                autoCapitalize={"none"}
                autoCompleteType="password"
                secureTextEntry={true}
                inputStyle={{
                  color: "black",
                  fontSize: 16,
                  fontWeight: "normal",
                }}
                onChangeText={(text) => setContraseña(text)}
              />

              <TouchableOpacity
                onPress={() => alert("*Olvidaste la contraseña*")}
              >
                <Text style={estilos.olvidasteClave}>
                  ¿Olvidaste tu Contraseña?
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={estilos.containerVolver}>
              <BotonNextBack
                title="Volver"
                color="#7936E4"
                onPress={() => navigation.popToTop()}
              />
            </View>
            <View style={estilos.containerBoton}>
              <BotonNextBack
                type="Next"
                title="Iniciar Sesión"
                color="#fff"
                onPress={() => SignIn(email, contraseña)}
              />
            </View>
          </View>
        </>
      </ImageBackground>
    </ContainerKeyboardView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  containerTexto: {
    flex: 5,
    justifyContent: "flex-end",
    marginHorizontal: "10%",
  },
  containerContent: {
    flex: 4,
    alignItems: "flex-start",
    marginHorizontal: "10%",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 36,
    fontWeight: "500",
  },
  containerInputs: {
    flex: 2,
    width: "80%",
  },
  containerVolver: {
    flex: 1,
    justifyContent: "flex-end",
  },
  containerBoton: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  Boton: {
    marginBottom: 20,
    marginHorizontal: 20,
  },
  olvidasteClave: {
    color: "#1679C0",
    marginVertical: 30,
  },
});
