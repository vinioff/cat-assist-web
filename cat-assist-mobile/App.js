import React, { useState } from "react";
import { AppRegistry, StyleSheet, View, TouchableOpacity, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Tela de Splash
import Splash from "./screens/Splash";
import PageList from "./screens/_Dev_screens/pagelist";
import Recepcao from "./screens/Recepcao";

import Navbar from "./components/navbar";

AppRegistry.registerComponent("main", () => App);

const Stack = createStackNavigator();

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("PageList");

  // const user = auth.currentUser;

  const handleNavigationChange = (routeName) => {
    setCurrentScreen(routeName);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        // DEVELOPER-- switch to Splash after all the software is completed
        initialRouteName="PageList"
        // initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
          }}
          listeners={({ navigation }) => ({
            focus: () => handleNavigationChange("Splash"),
          })}
        />
        <Stack.Screen
          name="PageList"
          component={PageList}
          options={{
            headerShown: false,
          }}
          listeners={({ navigation }) => ({
            focus: () => handleNavigationChange("PageList"),
          })}
        />
        <Stack.Screen
          name="Recepcao"
          component={Recepcao}
          options={{
            headerShown: false,
          }}
          listeners={({ navigation }) => ({
            focus: () => handleNavigationChange("Recepcao"),
          })}
        />
      </Stack.Navigator>

      {currentScreen != "Splash" &&
        currentScreen != "Login" && (
          <Navbar cs={currentScreen} />
        )}

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },

});
