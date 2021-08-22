import React, { useState, useEffect, useRef, useCallback } from "react";

import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Animated,
  Image,
} from "react-native";
import {
  Feather,
  SimpleLineIcons,
  AntDesign,
  MaterialIcons,
} from "@expo/vector-icons";
import {
  Insets,
  dWidth,
  dHeight,
  waitings,
  s,
  vs,
  ms,
  mvs,
  formatNumber,
} from "~helper";

const HeaderDetail = ({ navigation }) => {
  const [activeHeart, setActiveHeart] = useState(false);
  const [animatedValue, setAnimatedValue] = useState(`rgba(255, 255, 255,0)`);
  const [shadowOpacity, setshadowOpacity] = useState(0.2);
  const [shadowOpacityAndroid, setshadowOpacityAndroid] = useState(8);

  return (
    <View
      style={{
        backgroundColor: animatedValue,
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
        zIndex: 1,
        paddingHorizontal: vs(20),
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: vs(Insets().top) + 20,
        }}
      >
        <View>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={[
              styles.Cart,
              styles.Shadow,
              {
                shadowOpacity: shadowOpacity,
                elevation: shadowOpacityAndroid,
              },
            ]}
          >
            <AntDesign name="left" size={ms(20)} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={[
              styles.Cart,
              {
                shadowOffset: { width: 0, height: 2 },
                shadowColor: "#000",
                shadowRadius: 5.0,
                shadowOpacity: 0.26,
                elevation: 3,
              },
            ]}
            onPress={() => setActiveHeart(!activeHeart)}
          >
            {/* <AntDesign name="hearto" size={ms(22)} color="black" /> */}
            <AntDesign
              name={activeHeart ? "hearto" : "heart"}
              size={ms(20)}
              color={activeHeart ? "black" : "#ff6162"}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.Cart,
              styles.Shadow,
              {
                marginLeft: vs(10),
                shadowOpacity: shadowOpacity,
                elevation: shadowOpacityAndroid,
              },
            ]}
          >
            <Feather name="shopping-bag" size={ms(20)} color="#5cc16b" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Cart: {
    justifyContent: "center",
    height: ms(40),
    width: ms(40),

    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 40,
  },
  Shadow: {
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "#000",
    shadowRadius: 5.0,
  },
});

export default HeaderDetail;
