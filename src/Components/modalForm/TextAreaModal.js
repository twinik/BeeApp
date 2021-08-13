import React from "react";
import { TextInput, Pressable } from "react-native";
import { Text } from "react-native";
import { Input } from "react-native-elements";

export default function TextAreaModal({ titulo, placeholder }) {
  const [value, setValue] = React.useState("");
  return (
    <>
      <Text style={{ fontWeight: "bold", letterSpacing: 2 }}>{titulo}</Text>
      <TextInput
        placeholder={placeholder}
        multiline={true}
        numberOfLines={4}
        style={{ borderWidth: 1, borderRadius: 10, padding: 10,marginTop:10,textAlignVertical: "top",color: "#807F7F",height:"40%" }}
        value={value}
        onChangeText={(x) => setValue(x)}
        maxLength={200}
      />
    </>
  );
}
