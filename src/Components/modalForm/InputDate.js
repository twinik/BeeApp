import React from "react";
import { Alert, Modal, StyleSheet, Text, TextInput, View } from "react-native";
import FormItem from "../Forms/FormItem";
export default function InputModal2({
  titulo,
  placeholder,
  disabled,
  control,
}) {
  if (disabled) {
    var date = new Date();
    var fecha =
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
  }
  return (
    <View style={{ display: "flex", flexDirection: "column" }}>
      <Text style={{ fontWeight: "bold", letterSpacing: 2 }}>{titulo}</Text>
      {disabled ? (
        <TextInput
          placeholder={placeholder}
          editable={disabled ? false : true}
          value={disabled ? fecha : null}
        />
      ) : (
        <FormItem control={control} label="fechaLimite">
          <TextInput
            placeholder={placeholder}
            editable={disabled ? false : true}
            value={disabled ? fecha : null}
          />
        </FormItem>
      )}
    </View>
  );
}
