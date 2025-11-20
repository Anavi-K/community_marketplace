import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./src/screens/HomeScreen";
import AddProductScreen from "./src/screens/addproduct/AddProductScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AddProduct"   // 👈 CHANGE THIS
        screenOptions={{ headerShown: true }}
      >
        <Stack.Screen name="AddProduct" component={AddProductScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
