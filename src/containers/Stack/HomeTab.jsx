import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import TabBar from "~components/TabBar";
import Home from "~containers/Home";
import User from "~containers/User";

const HomeTab = () => {
  const insets = useSafeAreaInsets();

  const Tab = createBottomTabNavigator();
  return (
    <View style={{ flex: 1, position: "relative" }}>
      <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Chat" component={User} />
        <Tab.Screen name="Notify" component={User} />
        <Tab.Screen name="Account" component={User} />
      </Tab.Navigator>
      {insets.bottom > 0 && (
        <View
          style={{
            height: insets.bottom - 10,
            backgroundColor: "white",
          }}
        />
      )}
    </View>
  );
};

export default HomeTab;
