import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";

export default function UserImage({ uri, status, style, disabled }) {
  const background = status
    ? { backgroundColor: "green" }
    : { backgroundColor: "#c5c6c9" };
  return (
    <>
      <View
        style={{
          borderRadius: 50,
          width: 60,
          height: 60,
          ...style,
        }}
      >
        <ImageBackground
          source={{
            uri: uri,
          }}
          style={{ flex: 1 }}
          imageStyle={{ borderRadius: 100 }}
        />
        {!disabled ? <View style={[estilos.circulo, background]} /> : null}
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  circulo: {
    borderWidth: 2,
    borderColor: "white",
    height: 17,
    width: 17,
    borderRadius: 10,
    position: "absolute",
    bottom: -1,
    right: 1,
  },
});
