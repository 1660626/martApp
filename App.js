import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider, createStore  } from "react-redux";
import DisplayMain from "~/containers/DisplayMain";
import SplashScreen from "~/containers/SplashScreen";
import rootReducer from "~/redux/reducers";



export default function App() {
  const [isLoading, setIsLoading] = useState(true);
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
