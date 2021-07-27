import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "~containers/Home";
import Detail from "~containers/Detail";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Detail} />
    </Stack.Navigator>
  );
};

export default HomeStack;
