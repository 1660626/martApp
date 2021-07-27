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

const ProductCard = ({ product , navigation}) => {

  const priceNew = ( product.price * (100 - product.sale)) / 100;
  return (
    <TouchableOpacity
      style={{
        width: 130,
        height: 190,
      }}
      onPress={() => navigation.navigate('Details', {
        product: product,
        priceNew:priceNew,
      })}
      

    >
      <View
        style={{
          position: "absolute",
          backgroundColor: "tomato",
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
            fontSize: 10,
          }}
        >
          {`-${product.sale}%`}
        </Text>
      </View>
      <View
        style={{
          // borderRadius: 15,
          flex: 1,
          padding: 15,
          // backgroundColor: "blue",
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
        <View>
          <Text
            style={{
              color: "tomato",
              fontWeight: "600",
              lineHeight: 14,
              fontSize: 14,
            }}
          >
            {formatNumber(priceNew)}
          </Text>
          {/* <Text
            style={{
              color: "#a9a9b1",
              fontWeight: "600",
              fontSize: 10,
              textDecorationLine:"line-through"
            }}
          >
            {formatNumber(priceOld)}
          </Text> */}
        </View>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{
            fontWeight: "400",
            lineHeight: 15,
            fontSize: 13,
            color: "#262626",
            marginTop: 8,

          }}
        >
          {product.name}
        </Text>
        <Text
          style={{
            fontWeight: "400",
            lineHeight: 15,
            fontSize: 13,
            color: "#a9a9b1",
          }}
        >
          {"0.8Kg - 1Kg"}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
