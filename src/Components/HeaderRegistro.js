import React from "react";
import {
  ImageBackground,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  StatusBar,
  Keyboard,
  View,
  StyleSheet,
} from "react-native";

export default class containerHeader extends React.Component {
  constructor(props) {
    super(props);
    this.style =
      this.props.addStyle != undefined
        ? { ...styles.containerHeader, ...this.props.addStyle }
        : this.props.style != undefined
        ? this.props.style
        : styles.containerHeader;
  }

  render() {
    return <View style={this.style}>{this.props.children}</View>;
  }
}

const styles = StyleSheet.create({
  containerHeader: {
    flex: 4,
    marginHorizontal: "8%",
    justifyContent: "flex-end",
  },
});
