import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";

import ContainerKeyboardView from "./../../../Components/ContainerKeyboardView";
import HeaderRegistro from "./../../../Components/HeaderRegistro";
import ContenidoRegistro from "./../../../Components/ContenidoRegistro";
import BotonSiguiente from "../../../Components/BotonSiguiente";
import { AntDesign } from "@expo/vector-icons";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
const CELL_COUNT = 4;

const { width, height } = Dimensions.get("window");

export default function Verificacion({ navigation }) {
  const [value, setValue] = React.useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  return (
    <ContainerKeyboardView>
      <ImageBackground
        style={{ flex: 1 }}
        source={require("../../../../assets/wallpaper.png")}
      >
        <>
          <HeaderRegistro>
            <View style={styles.containerTitulo}>
              <Text style={styles.titulo}>Verificación</Text>
            </View>
          </HeaderRegistro>

          <ContenidoRegistro>
            <Text style={styles.text2}>
              Hemos enviado un código de verificación a su celular.
              {"\n"}Ingrese el código de 4 digitos que ha recibido
            </Text>
            <Text style={styles.text3}>¿No has recibido ningun codigo?</Text>
            <TouchableOpacity onPress={() => alert("Vuelve a enviar")}>
              <Text style={styles.text4}>Volver a enviar</Text>
            </TouchableOpacity>
            <View style={{ flex: 1, justifyContent:'center'}}>
              <CodeField
                ref={ref}
                {...props}
                // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({ index, symbol, isFocused }) => (
                  <Text
                    key={index}
                    style={[styles.cell, isFocused && styles.focusCell]}
                    onLayout={getCellOnLayoutHandler(index)}
                  >
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                )}
              />
            </View>
          </ContenidoRegistro>

          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={styles.containerVolver}>
              <TouchableOpacity
                style={styles.Boton}
                onPress={() => navigation.goBack()}
              >
                <AntDesign name="left" size={32} color="#9E5FB0" />
              </TouchableOpacity>
            </View>
            <View style={styles.containerBoton}>
              <TouchableOpacity
                style={styles.Boton}
                onPress={() => navigation.navigate("Documentos")}
              >
                <AntDesign name="right" size={32} color="#9E5FB0" />
              </TouchableOpacity>
            </View>
          </View>
        </>
      </ImageBackground>
    </ContainerKeyboardView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },

  header: {
    flex: 7,
    marginHorizontal: "8%",
    justifyContent: "flex-end",
  },

  containerTitulo: {
    flex: 1,
    justifyContent: "flex-end",
  },

  containerTexto: {
    flex: 1,
    alignItems: "center",
  },

  containerInputs: {
    flex: 4,
    justifyContent: "center",
    marginHorizontal: "5%",
  },

  containerBoton: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },

  containerVolver: {
    flex: 1,
    justifyContent: "flex-end",
  },

  Boton: {
    marginBottom: 10,
    marginHorizontal: 10,
  },

  numInput: {
    textAlign: "center",
    fontSize: 20,
    backgroundColor: "#E5E5E5",
    borderRadius: 10,
    width: 60,
    height: 60,
  },

  titulo: {
    fontSize: 36,
  },

  text2: {
    fontSize: 16,
  },

  text3: {
    fontSize: 16,
    marginTop: 20,
  },

  text4: {
    fontSize: 16,

    color: "#1679C0",
  },
  codeFieldRoot: { marginTop: 20, marginHorizontal: "5%" },
  cell: {
    width: 60,
    height: 60,
    lineHeight: 60,
    fontSize: 24,
    borderWidth: 0,
    backgroundColor: "#E5E5E5",
    textAlign: "center",
    textAlignVertical: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  focusCell: {
    backgroundColor: "#DBDBDC",
  },
});
