import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import {
  s,
  vs,
  ms,
  mvs,
  Insets,
  dWidth,
  dHeight,
  waitings,
  Item,
  formatNumber,
} from "~helper";
import StarRating from "../../StarRating/StarRating";

const ProductCard = ({ product, navigation }) => {
  const priceNew = (product.price * (100 - product.sale)) / 100;
  return (
    <TouchableOpacity
      style={{
        width: 180,
        height: 250,
        paddingHorizontal: 5,
      }}
      onPress={() =>
        navigation.navigate("Details", {
          product: product,
          priceNew: priceNew,
        })
      }
    >
      <View
        style={{
          position: "absolute",
          backgroundColor: "#ff6162",
          paddingHorizontal: 5,
          right: 0,
          top: 10,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: 12,
          }}
        >
          {`-${product.sale}%`}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          padding: 15,
        }}
      >
        <Image
          style={{ height: "100%", width: "100%" }}
          resizeMode={"contain"}
          source={product.img}
          alt={product.name}
        />
      </View>
      <View>
        <Text
          numberOfLines={2}
          ellipsizeMode="tail"
          style={{
            fontWeight: "600",
            lineHeight: 15,
            fontSize: 13,
            color: "#262626",
            
          }}
        >
          {product.name} 500g
        </Text>
        <StarRating showRespon rating={product.ratingObj} />

        <Text
          style={{
            color: "#ff6162",
            fontWeight: "bold",
            lineHeight: 16,
            fontSize: 16,
            marginTop: 8,
          }}
        >
          {formatNumber(priceNew)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
