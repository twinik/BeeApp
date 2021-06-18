import React from 'react';
import { Platform, View, TextInput, StyleSheet, Text, KeyboardAvoidingView, ImageBackground, Dimensions, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native'
import Boton from '../../Components/Boton'
import ContainerKeyboardView from "./../../Components/ContainerKeyboardView";
import HeaderRegistro from "./../../Components/HeaderRegistro";
import ContenidoRegistro from "./../../Components/ContenidoRegistro";
import AppContext from '../../Context/AppContext';
import {
    FontAwesome5,
    FontAwesomeIcon,
    MaterialCommunityIcons,
    Ionicons,
    AntDesign
} from "@expo/vector-icons";
import { Sae, Isao } from "react-native-textinput-effects";

const { width, height } = Dimensions.get('window')

export default function SignIn({ navigation, route }) {

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    /*const { signIn } = React.useContext(AuthContext);*/
    const { SignIn } = React.useContext(AppContext)

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
                            <Isao
                                label={'Email'}
                                // this is applied as active border and label color
                                activeColor={'#7936E4'}
                                // active border height
                                borderHeight={8}
                                inputPadding={16}
                                labelHeight={24}
                                // this is applied as passive border and label color
                                passiveColor={'#B3B3B3'}
                                autoCorrect={false}
                                keyboardType="email-address"
                                autoCapitalize={"none"}
                                inputStyle={{
                                    color: "black",
                                    fontSize: 16,
                                    fontWeight: "normal",
                                }}
                            />

                            <Isao
                                label={'Contraseña'}
                                // this is applied as active border and label color
                                activeColor={'#7936E4'}
                                // active border height
                                borderHeight={8}
                                inputPadding={16}
                                labelHeight={24}
                                // this is applied as passive border and label color
                                passiveColor={'#B3B3B3'}
                                autoCorrect={false}
                                keyboardType="email-address"
                                autoCapitalize={"none"}
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
                            />
                            <TouchableOpacity onPress={() => alert("*Olvidaste la contraseña*")}>
                                <Text style={estilos.olvidasteClave}>¿Olvidaste tu Contraseña?</Text>
                            </TouchableOpacity>
                        </View>

                    </View>


                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <View style={estilos.containerVolver}>
                            <TouchableOpacity
                                style={estilos.Boton}
                                onPress={() => navigation.popToTop()}
                            >
                                <AntDesign name="left" size={32} color="#9E5FB0" />
                            </TouchableOpacity>
                        </View>
                        <View style={estilos.containerBoton}>
                            <Boton style={estilos.Boton} title="Iniciar Sesion" onPress={() => SignIn()}></Boton>
                        </View>
                    </View>

                </>
            </ImageBackground>
        </ContainerKeyboardView>
    )
}


const estilos = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerTexto: {
        flex: 5,
        justifyContent: "flex-end",
        marginHorizontal: "10%",
    },
    containerContent: {
        flex: 4,
        alignItems: 'flex-start',
        marginHorizontal: '10%',
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 48,
    },
    containerInputs: {
        flex: 2,
        width: '80%',
    },
    containerVolver: {
        flex: 1,
        justifyContent: "flex-end"
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
        color: '#1679C0',
        margin:'5%'
    }
})