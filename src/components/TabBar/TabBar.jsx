import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Animated,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BottomMenuItem from "./BottomMenuItem";
import { s, vs, ms, mvs } from "~helper";
import { useSelector, useDispatch } from "react-redux";
import { setTypePage } from "~/redux/form";
const TabBar = ({ state, descriptors, navigation }) => {
  // console.log(state);
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();
  const totalWidth = Dimensions.get("window").width;
  const tabWidth = totalWidth / state.routes.length;

  const [translateValue] = useState(new Animated.Value(0));
  return (
    <View
      style={[
        style.tabContainer,
        { width: totalWidth, bottom: insets.bottom - 10 },
      ]}
    >
      <View style={{ flexDirection: "row" }}>
        <Animated.View
          style={[
            style.slider,
            {
              transform: [{ translateX: translateValue }],
              width: tabWidth,
            },
          ]}
        />
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
          const isFocused = state.index === index;
          const onPress = () => {
          
            Animated.spring(translateValue, {
              toValue: index * tabWidth,
              velocity: 10,
              useNativeDriver: true,
            }).start();
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });
            dispatch(setTypePage(route.name));
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };
          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityStates={isFocused ? ["selected"] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1 }}
              key={index}
            >
              <BottomMenuItem title={label.toString()} isCurrent={isFocused} />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  tabContainer: {
    height: ms(65),
    backgroundColor: "white",
    shadowOffset: { width: 0, height: 2 },

    shadowColor: "#000",
    elevation: 5,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    // borderTopRightRadius: 20,
    // borderTopLeftRadius: 20,
    // borderRadius: 20,
    position: "absolute",
  },
  slider: {
    height: "10%",
    position: "absolute",
    bottom: vs(0),
    // left: 10,
    // backgroundColor: "pink",
    borderRadius: 20,
  },
});

export default TabBar;
