import React from "react";
import { View, StatusBar, StyleSheet } from "react-native";
import AppContext from "../../../Context/AppContext";
import MenuEditProfile from "../../../Components/Menu/MenuEditProfile";
import ContentDatosPerfilEdit from "../../../Components/Content/ContentDatosPerfilEdit";

export default function EditProfile({ navigation }) {
  return (
    <View style={styles.container}>
      <MenuEditProfile
        onPressClose={() => navigation.goBack()}
        onPressSave={() => navigation.goBack()}
      />
      {/* Contenido */}
      <ContentDatosPerfilEdit />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7936E4",
    marginTop: StatusBar.currentHeight,
  },
});
