import React from "react";
import { View, Text, StyleSheet ,Image} from "react-native";

export default function RubroCard({titulo,uri}) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{uri:uri}}
      />
      <Text>{titulo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexShrink: 1,
    flexBasis: "40%",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    height: "30%",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
});
