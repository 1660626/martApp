import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Dimensions,
  RefreshControl,
  Animated,
  Easing,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Insets, dWidth, dHeight, waitings, s, vs, ms, mvs } from "~helper";
import SearchBar from "~components/SearchBar";
const Header = ({ typePage ,}) => {


  return (
    <LinearGradient
      start={{ x: 1.0, y: 0.0 }}
      end={{ x: 0.0, y: 1.0 }}
      colors={["#8dc55b", "#5cc16b"]}
    >
      <Animated.View style={[styles.box, { marginTop: vs(Insets().top) }]}>
        <SearchBar />
      </Animated.View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  box: {
    paddingHorizontal: vs(10),
  },
});

export default Header;
