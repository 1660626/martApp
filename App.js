import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider, createStore } from "react-redux";
import * as Font from "expo-font";

import DisplayMain from "~/containers/DisplayMain";
import SplashScreen from "~/containers/SplashScreen";
import rootReducer from "~/redux/reducers";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  Font.loadAsync({
    SfProTextMedium: require("~assets/Fonts/sf-pro-text-medium.ttf"),
  });

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  }, []);
  return isLoading ? (
    <SplashScreen />
  ) : (
    <Provider store={rootReducer}>
      <SafeAreaProvider>
        <NavigationContainer>
          <DisplayMain />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
