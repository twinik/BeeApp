import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

import ContainerKeyboardView from "./../../../Components/ContainerKeyboardView";
import HeaderRegistro from "./../../../Components/HeaderRegistro";
import ContenidoRegistro from "./../../../Components/ContenidoRegistro";
import BotonNextBack from "../../../Components/BotonNextBack";
import MyText from "../../../Components/MyText";
import { generarVerificacionTelefono,verificarTelefono} from '../../../Firebase/Utils/AuthConexion'
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
const CELL_COUNT = 4;

export default function Verificacion({ navigation,route }) {
  const [value, setValue] = React.useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  var data=route.params

  React.useEffect(() => {
    const fc = async() =>{
      try {
        await generarVerificacionTelefono(data.Telefono)
      } catch (e){
        alert(e)
      }
    }
    fc()
  }, []);

  React.useEffect(() => {
    const fc = async() =>{
      try{
       await verificarTelefono(data.Telefono,value)
       alert('Verificacion exitosa')
       navigation.push("Documentos")
      } catch(e){
        alert(e)
      }}
    if(value.length === 4){
      fc()
    }
    }
  , [value]);

  return (
    <ContainerKeyboardView style>
      <View style={styles.container}>
        <HeaderRegistro>
          <View style={styles.containerTitulo}>
          <MyText
            style={styles.titulo}
            text={`Verificación`}
            fontStyle="Medium"
          />
          </View>
        </HeaderRegistro>

        <ContenidoRegistro>
          <MyText
            style={styles.text2}
            text={`Hemos enviado un código de verificación a su celular \nIngrese el código de 4 digitos que ha recibido`}
            fontStyle="Medium"
          />
          <MyText
            style={styles.text3}
            text={`¿No has recibido ningun codigo?`}
            fontStyle="Medium"
          />
          <TouchableOpacity onPress={() => alert("Vuelve a enviar")}>
            <MyText
            style={styles.text4}
            text={`Volver a enviar`}
            fontStyle="Medium"
          />
          </TouchableOpacity>
          <View style={{ flex: 1, justifyContent: "center" }}>
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
            <BotonNextBack
              title="Volver"
              color="#7936E4"
              onPress={() => navigation.goBack()}
            />
          </View>
          <View style={styles.containerBoton}>
            
          </View>
        </View>
      </View>
    </ContainerKeyboardView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
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
