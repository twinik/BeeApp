import React from "react";
import { Alert, Modal, StyleSheet, Text, TextInput, View } from "react-native";

export default function InputModal2({titulo,placeholder}) {
  return (
    <View style={{display:"flex",flexDirection:'column'}}>
      <Text style={{ fontWeight: "bold", letterSpacing: 2 }}>{titulo}</Text>
      <TextInput placeholder={placeholder}  />
    </View>
  );
}
