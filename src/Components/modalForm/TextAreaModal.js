import React from "react";
import { TextInput, Pressable } from "react-native";
import { Text } from "react-native";
import { Input } from "react-native-elements";
import FormItem from "../Forms/FormItem";
export default function TextAreaModal({ titulo, placeholder,control}) {
  const [value, setValue] = React.useState("");
  return (
    <>
      <Text style={{ fontWeight: "bold", letterSpacing: 2 }}>{titulo}</Text>
      <FormItem control={control} label="descripcion">
      <TextInput
        placeholder={placeholder}
        multiline={true}
        numberOfLines={4}
        style={{ borderWidth: 1, borderRadius: 10, padding: 10,marginTop:10,textAlignVertical: "top",color: "#393939",height:"40%" }}
        value={value}
        onChangeText={(x) => setValue(x)}
        maxLength={200}
      />
      </FormItem>
    </>
  );
}
