import React, { useState } from "react";
import {  StyleSheet, ScrollView, Text } from "react-native";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Sae } from "react-native-textinput-effects";
import { useForm } from "react-hook-form";
import FormItem from "./FormItem";
import Boton from "../Boton";
import DatePickes from "./DatePickes";
export default function FormDatos() {
  

  const [valor, setValor] = useState("");
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data) => console.log(data);

  const configSae = {
    iconColor: "#7936E4",
    labelStyle: { color: "#B3B3B3", fontWeight: "normal" },
    inputPadding: 16,
    labelHeight: 24,
    borderHeight: 2,
    autoCorrect: false,
    inputStyle: { color: "black", fontSize: 16, fontWeight: "normal" },
  };

  return (
    <ScrollView style={style.container}>
      <FormItem control={control} label="Nombre">
        <Sae
          label={"Nombre"}
          iconClass={FontAwesome5}
          iconName={"user-alt"}
          {...configSae}
        />
      </FormItem>
      {errors.Nombre ? <Text>This is required.</Text> : null}
      <FormItem control={control} label="Apellido">
        <Sae
          label={"Apellido"}
          iconClass={FontAwesome5}
          iconName={"user-alt"}
          {...configSae}
        />
      </FormItem>
      <FormItem control={control} label="Telefono">
        <Sae
          label={"Número de Teléfono"}
          iconClass={MaterialCommunityIcons}
          iconName={"cellphone"}
          {...configSae}
        />
      </FormItem>
      <DatePickes setValor={setValor} configSae={configSae}/>

      <FormItem control={control} label="Fecha de nacimiento">
        <Sae
          label={"Fecha de nacimiento"}
          iconClass={MaterialIcons}
          iconName={"calendar-today"}
          {...configSae}
        />
      </FormItem>

      <FormItem control={control} label="Email">
        <Sae
          label={"Email"}
          iconClass={MaterialIcons}
          iconName={"email"}
          {...configSae}
        />
      </FormItem>
      <FormItem control={control} label="Contraseña">
        <Sae
          label={"Contraseña"}
          iconClass={MaterialCommunityIcons}
          iconName={"form-textbox-password"}
          {...configSae}
        />
      </FormItem>
      <FormItem control={control} label="2Contraseña">
        <Sae
          label={"Confirme la contraseña"}
          iconClass={MaterialCommunityIcons}
          iconName={"form-textbox-password"}
          {...configSae}
        />
      </FormItem>
      <Boton title="Enviar" onPress={handleSubmit(onSubmit)} />
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
