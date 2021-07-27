import React, { useState, useRef } from "react";
import { View, Text, Animated, Easing } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { s, vs, ms, mvs } from "~helper";

const BottomMenuItem = ({ title, isCurrent }) => {
  const [translateValue] = useState(new Animated.Value(30));
  const [translateValueIMG] = useState(new Animated.Value(5));

  if (isCurrent) {
    Animated.timing(translateValueIMG, {
      toValue: -2,
      // velocity: 4000,
      duration: 100,
      easing: Easing.linear,
      delay: 0,
      useNativeDriver: true,
    }).start();
    Animated.spring(translateValue, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
  }

  let iconName;
  let titleName = "";
  if (title === "Home") {
    iconName = isCurrent ? "home-outline" : "home";
    titleName = "Trang chủ";
  } else if (title === "Chat") {
    titleName = "Tin nhắn";
    iconName = isCurrent
      ? "chatbubble-ellipses-outline"
      : "chatbubble-ellipses";
  } else if (title === "Notify") {
    titleName  = "Thông báo";

    iconName = isCurrent ? "notifications-outline" : "notifications-sharp";
  } else if (title === "Account") {
    titleName  = "Tài khoản";

    iconName = isCurrent ? "person-circle-outline" : "person-circle-sharp";
  }

  return (
    <View
      style={{
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Animated.View
          style={{
            transform: isCurrent
              ? [{ translateY: translateValueIMG }]
              : [{ translateY: vs(5) }],
          }}
        >
          <Ionicons
            name={iconName}
            size={24}
            style={{
              zIndex: 99989,
              color: isCurrent ? "#5cc16b" : "grey",
            }}
          />
        </Animated.View>

        <Animated.Text
          style={{
            fontWeight: "bold",
            color: isCurrent ? "#5cc16b" : "grey",
            transform: isCurrent
              ? [{ translateY: translateValue }]
              : [{ translateY: vs(30) }],
          }}
        >
          {titleName}
        </Animated.Text>
      </View>
    </View>
  );
};
export default BottomMenuItem;
