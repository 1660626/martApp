import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { AntDesign } from "@expo/vector-icons";
import { s, vs, ms, mvs, Insets, dWidth, dHeight, waitings } from "~helper";

import ClockCountDown from "~components/ClockCountDown";

const FlashSale = ({ size = 10, startTime, endTime }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Image
        style={{
          width: ms(80),
          height: 30,
          marginRight: 5,
          marginTop: 5,
        }}
        resizeMode={"contain"}
        source={require("~/assets/image/flashsale.png")}
        alt="Alternate Text"
      />
      <ClockCountDown startTime={startTime} endTime={endTime} size={size} />

      <TouchableOpacity
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: size,
            color: "#ff6644",
            opacity: 0.9,
          }}
        >
          Xem tất cả <AntDesign name="right" size={size} />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FlashSale;
