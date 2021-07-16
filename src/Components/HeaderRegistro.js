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
import LottieView from "lottie-react-native";
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
    return (
      <View style={styles.container}>
        <View style={styles.containerLottie}>
          <LottieView
            source={require("../../assets/Animaciones/background.json")}
            autoPlay
            loop
            /* style={{ width: "100%" }} */
          />
        </View>

        <View style={this.style}>{this.props.children}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  containerHeader: {
    flex: 1,
    marginHorizontal: "8%",
    justifyContent: "flex-end",
  },
  containerLottie: {
    flex: 3,
  },
});
