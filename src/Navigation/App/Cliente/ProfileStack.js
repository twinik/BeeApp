import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import Profile from "../../../Views/Cliente/App/Profile"
import EditProfile from "../../../Views/Cliente/App/EditProfile"
import { Ionicons, Foundation, FontAwesome } from "@expo/vector-icons";

export default function ProfileStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ title: "Profile" }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ title: "EditProfile" }}
      />
    </Stack.Navigator>
  );
}
