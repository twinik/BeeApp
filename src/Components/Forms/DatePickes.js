import React from "react";
import { useState } from "react";
import {TouchableOpacity} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Sae } from "react-native-textinput-effects";
import { Ionicons } from "@expo/vector-icons";
import Moment from "moment";
export default function DatePickes(setValor,configSae) {

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
  
  return (
    <>
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
          {...configSae}
        />
      </TouchableOpacity>
    </>
  );
}
