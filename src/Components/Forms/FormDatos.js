import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Button,
  Text,
  TextInput,
  Keyboard,
} from "react-native";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Sae } from "react-native-textinput-effects";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Moment from "moment";

export default function FormDatos() {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date) => {
    Moment.locale("en");
    setValor(Moment(date).format("DD/MM/YYYY"));
    console.log("A date has been picked: ", date);
    hideDatePicker();
  };

  const [valor, setValor] = useState("");

  return (
    <ScrollView style={style.container}>
      <Sae
        label={"Nombre"}
        iconClass={FontAwesome5}
        iconName={"user-alt"}
        iconColor={"#7936E4"}
        labelStyle={{ color: "#B3B3B3", fontWeight: "normal" }}
        inputPadding={16}
        labelHeight={24}
        borderHeight={2}
        autoCorrect={false}
        inputStyle={{
          color: "black",
          fontSize: 16,
          fontWeight: "normal",
        }}
      />
      <Sae
        label={"Apellido"}
        iconClass={FontAwesome5}
        iconName={"user-alt"}
        iconColor={"#7936E4"}
        labelStyle={{ color: "#B3B3B3", fontWeight: "normal" }}
        inputPadding={16}
        labelHeight={24}
        // active border height
        borderHeight={2}
        // TextInput props
        autoCorrect={false}
        inputStyle={{
          color: "black",
          fontSize: 16,
          fontWeight: "normal",
        }}
      />
      <Sae
        label={"Número de Teléfono"}
        iconClass={MaterialCommunityIcons}
        iconName={"cellphone"}
        iconColor={"#7936E4"}
        labelStyle={{ color: "#B3B3B3", fontWeight: "normal" }}
        inputPadding={16}
        labelHeight={24}
        borderHeight={2}
        dataDetectorTypes="phoneNumber"
        keyboardType="number-pad"
        maxLength={10}
        autoCorrect={false}
        inputStyle={{
          color: "black",
          fontSize: 16,
          fontWeight: "normal",
        }}
      />

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      <TouchableOpacity onPress={showDatePicker}>
        <Sae
          label={"Fecha de nacimiento"}
          iconClass={Ionicons}
          iconName={"md-calendar-outline"}
          iconColor={"#7936E4"}
          labelStyle={{ color: "#B3B3B3", fontWeight: "normal" }}
          inputPadding={16}
          labelHeight={24}
          borderHeight={2}
          dataDetectorTypes="all"
          autoCorrect={false}
          value={valor}
          editable={false}
          keyboardType={null}
          inputStyle={{
            color: "black",
            fontSize: 16,
            fontWeight: "normal",
          }}
        />
      </TouchableOpacity>

      <Sae
        label={"Email"}
        iconClass={MaterialIcons}
        iconName={"email"}
        iconColor={"#7936E4"}
        labelStyle={{ color: "#B3B3B3", fontWeight: "normal" }}
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
      />
      <Sae
        label={"Contraseña"}
        iconClass={MaterialCommunityIcons}
        iconName={"form-textbox-password"}
        iconColor={"#7936E4"}
        labelStyle={{ color: "#B3B3B3", fontWeight: "normal" }}
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
      />
      <Sae
        label={"Confirme la contraseña"}
        iconClass={MaterialCommunityIcons}
        iconName={"form-textbox-password"}
        iconColor={"#7936E4"}
        labelStyle={{ color: "#B3B3B3", fontWeight: "normal" }}
        inputPadding={16}
        labelHeight={24}
        borderHeight={2}
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
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
