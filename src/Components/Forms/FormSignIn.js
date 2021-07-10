import React, { Component } from "react";
import { View, Button, ScrollView } from "react-native";
import AppContext from "../../Context/AppContext";
import PasswordInputText from "react-native-hide-show-password-input";
import { Sae } from "react-native-textinput-effects";
import {
  AntDesign,
  FontAwesome5,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export default function FormSignIn({ navigation, route }) {
  const [email, setEmail] = React.useState("");
  const [contraseña, setContraseña] = React.useState("");
  /*const { signIn } = React.useContext(AuthContext);*/
  const { SignIn } = React.useContext(AppContext);

  /*     constructor(props) {
        super(props);
        this.state = {
        password: "",
        };
    }

    const { password } = this.state; */

  return (
    <ScrollView>
      <Sae
        label={"Email"}
        iconClass={MaterialIcons}
        iconName={"email"}
        iconColor={"#7936E4"}
        labelStyle={{ color: "#B3B3B3" }}
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
        onChangeText={(text) => setEmail(text)}
      />

      <Sae
        label={"Contraseña"}
        iconClass={MaterialCommunityIcons}
        iconName={"form-textbox-password"}
        iconColor={"#7936E4"}
        labelStyle={{ color: "#B3B3B3" }}
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
        onChangeText={(text) => setContraseña(text)}
      />

      <PasswordInputText
        getRef={(input) => (this.input = input)}
        value={password}
        onChangeText={(password) => this.setState({ password })}
      />
    </ScrollView>
  );
}
