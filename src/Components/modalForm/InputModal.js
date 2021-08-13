import React from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { Input } from "react-native-elements";

export default function InputModal({titulo,placeholder,icon}) {
  return (
    <>
      <Text style={{ fontWeight: "bold", letterSpacing: 2 }}>{titulo}</Text>
      <Input
        placeholder={placeholder}
        leftIcon={icon}
      />
    </>
  );
}
