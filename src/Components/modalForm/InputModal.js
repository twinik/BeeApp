import React from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { Input } from "react-native-elements";
import FormItem from "../Forms/FormItem";
import MyText from '../MyText'
export default function InputModal({titulo,placeholder,icon,control}) {
  return (
    <>
      <MyText text={titulo} style={{ letterSpacing: 2 }} fontStyle="Bold"/>
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
