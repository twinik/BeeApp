import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BotonGrande from "../../../BotonGrande";

const BotonPresupuesto = ({ onPress }) => {
  return (
    <View
      style={{
        flex: 2,
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <View style={{ bottom: 25 }}>
        <BotonGrande
          title="Solicitar presupuesto"
          font="Medium"
          onPress={onPress}
        />
      </View>
    </View>
  );
};

export default BotonPresupuesto;

const styles = StyleSheet.create({});
