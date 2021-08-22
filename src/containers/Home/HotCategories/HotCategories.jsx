import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import {
  vs,
} from "~helper";
const HotCategories = () => {
  const hotBanner = [
    require("~/assets/hotBanner03.jpg"),
    require("~/assets/hotBanner01.jpg"),
    require("~/assets/hotBanner02.jpg"),
  ];
  return (
    <View
    
    >
      <Text
        style={{
          fontWeight: "bold",
        }}
      >
        Danh mục nổi bật
      </Text>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {hotBanner.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{
              justifyContent: "center",
              flex: 1,
              height: 70,
              paddingRight: index !== hotBanner.length - 1 ? vs(10) : 0,
            }}
          >
            <Image
              style={{ width: "100%", resizeMode: "contain" }}
              source={item}
              alt="Alternate Text"
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default HotCategories;
