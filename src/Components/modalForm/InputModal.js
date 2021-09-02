import React from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { Input } from "react-native-elements";
import FormItem from "../Forms/FormItem";
export default function InputModal({titulo,placeholder,icon,control}) {
  return (
    <>
      <Text style={{ fontWeight: "bold", letterSpacing: 2 }}>{titulo}</Text>
      <FormItem control={control} label="asunto">
      <Input
        placeholder={placeholder}
        leftIcon={icon}
        style={{paddingLeft:10}}
      />
      </FormItem>
    </>
  );
}
