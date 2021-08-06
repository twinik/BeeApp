import React from "react";
import {
  ImageBackground,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  StatusBar,
  Keyboard,
  View,
  StyleSheet,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

export default class containerContenido extends React.Component {
  constructor(props) {
    super(props);
    this.style =
      this.props.addStyle != undefined
        ? { ...styles.containerContenido, ...this.props.addStyle }
        : this.props.style != undefined
        ? this.props.style
        : styles.containerContenido;
  }

  render() {
    return <View style={this.style}>{this.props.children}</View>;
  }
}

const styles = StyleSheet.create({
  containerContenido: {
    flex: 4,
    marginHorizontal: "8%",
  },
});
