import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./src/Navigation/Root";
import AppState from "./src/Context/AppState";

//Diseño responsive
//width: wp(50), height: hp(50)
//paddingTop: StatusBar.currentHeight

export default function App() {
  return (
    <AppState>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </AppState>
  );
}
