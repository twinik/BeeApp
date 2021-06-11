import React from "react";
import {
  ImageBackground,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  StatusBar,
  Keyboard,
} from "react-native";

class containerKeyboardView extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{flex:1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            {this.props.children}
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

export default containerKeyboardView;

