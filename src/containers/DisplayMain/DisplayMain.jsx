// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { View } from "react-native";
// import { useSafeAreaInsets } from "react-native-safe-area-context";
// import TabBar from "~components/TabBar";

// import { HomeStack } from "~containers/Stack";
// import User from "~containers/User";

//  const DisplayMain = () => {
//   const insets = useSafeAreaInsets();

//   const Tab = createBottomTabNavigator();
//   return (
//     <View style={{ flex: 1, position: "relative" }}>
//       {/* <Header></Header> */}
//       <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
//         <Tab.Screen name="Home" component={HomeStack} />
//         <Tab.Screen name="Chat" component={User} />
//         <Tab.Screen name="Notify" component={User} />
//         <Tab.Screen name="Account" component={User} />
//       </Tab.Navigator>
//       {insets.bottom > 0 && (
//         <View
//           style={{
//             height: insets.bottom - 10,
//             backgroundColor: "white",
//           }}
//         />
//       )}
//     </View>
//   );
// };

// export default DisplayMain;

import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Detail from "~containers/Detail";
import HomeTab from "~containers/Stack/HomeTab";

const Stack = createStackNavigator();

const DisplayMain = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeTab} />
      <Stack.Screen name="Details" component={Detail} />
    </Stack.Navigator>
  );
};

export default DisplayMain;

