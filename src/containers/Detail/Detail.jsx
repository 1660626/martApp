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
import ProductReviews from "~components/Product/ProductReviews/ProductReviews";
import HeaderDetail from "./HeaderDetail/index";
import ProductDescription from "../../components/Product/ProductDescription/ProductDescription";

const Detail = ({ navigation, route }) => {
  const { product, priceNew } = route.params;
  console.log(navigation);

  return (
    <View>
      <HeaderDetail   navigation={navigation}/>
      <ScrollView
        onScroll={(event) => {
          const scrolling = event.nativeEvent.contentOffset.y;
          // if (scrolling > 50) {
          //   setAnimatedValue(
          //     `rgba(255, 255, 255, ${
          //       scrolling > 300 ? 1 : "0." + scrolling * 3
          //     })`
          //   );
          //   scrolling > 300 ? setshadowOpacity(0) : setshadowOpacity(0.2);
          //   scrolling > 300
          //     ? setshadowOpacityAndroid(0)
          //     : setshadowOpacityAndroid(8);
          // }
          // if (scrolling < 10) {
          //   setAnimatedValue(`rgba(255, 255, 255,0)`);
          // }
        }}
        scrollEventThrottle={16}
        style={{
          paddingHorizontal: 15,
          backgroundColor: "#fff",
        }}
      >
        <View style={{ marginBottom: 100 }}>
          <View>
            <View
              style={{
                width: "100%",
                height: 300,
                marginTop: 80,
                padding: 30,
              }}
            >
              <Image
                style={{
                  flex: 1,
                  height: undefined,
                  width: undefined,
                  resizeMode: "contain",
                }}
                source={product.img}
                alt="Alternate Text"
              />
            </View>

            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "black",
              }}
            >
              {product.name}
            </Text>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  color: "#ff6162",
                }}
              >
                {formatNumber(priceNew)}
              </Text>

              <Text
                style={{
                  backgroundColor: "#ff6162",
                  paddingHorizontal: 5,
                  fontWeight: "600",
                  fontSize: 18,
                  color: "#fff",
                  marginLeft: 15,
                }}
              >
                {`-${product.sale}%`}
              </Text>
            </View>

            <View>
              <Text
                style={{
                  color: "#a9a9b1",
                  fontWeight: "600",
                  fontSize: 16,
                  textDecorationLine: "line-through",
                }}
              >
                {formatNumber(product.price)}
              </Text>
            </View>
          </View>
          <View style={{}}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: "black",
                marginVertical: 15,
              }}
            >
              Chi tiết sản phẩm:
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View flex={2}>
                <Text style={{}}>Thương hiệu</Text>
                <Text style={{}}>Mã</Text>
              </View>
              <View flex={3}>
                <Text style={{ fontSize: 14, color: "#666" }}>
                  {product.brand}
                </Text>
                <Text style={{ fontSize: 14, color: "#666" }}>
                  {product.code}
                </Text>
              </View>
            </View>
          </View>
          <View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                marginVertical: 15,
                color: "black",
              }}
            >
              Mô tả sản phẩm:
            </Text>
            <ProductDescription/>
          </View>

          <View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                marginVertical: 15,

                color: "black",
              }}
            >
              Đánh giá sản phẩm
            </Text>
            <ProductReviews rating={product.ratingObj} />
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "white",
          paddingHorizontal: vs(20),
          borderRadius: 10,
          shadowOffset: { width: 0, height: 2 },
          shadowColor: "#000",
          shadowRadius: 5.0,
          shadowOpacity: 0.26,
          elevation: 3,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            marginVertical: vs(10),
          }}
        >
          <View style={{ width: "50%", paddingRight: 5 }}>
            <TouchableOpacity
              style={{
                borderColor: "#5cc16b",
                borderRadius: 5,
                height: 45,
                justifyContent: "center",
                borderWidth: 2,
              }}
            >
              {/* <MaterialIcons
                name="add-shopping-cart"
                style={{
                  color: "#fff",
                  alignSelf: "center",
                }}
                size={ms(30)}
                color="black"
              /> */}
              <Text
                style={{
                  fontSize: ms(16),
                  color: "#5cc16b",
                  fontWeight: "bold",
                  alignSelf: "center",
                  // textTransform: "uppercase",
                }}
              >
                Thêm vào giỏ
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ width: "50%" }}>
            <TouchableOpacity
              style={{
                backgroundColor: "#5cc16b",
                borderRadius: 5,
                height: 45,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: ms(16),
                  color: "#fff",
                  fontWeight: "bold",
                  alignSelf: "center",
                  // textTransform: "uppercase",
                }}
              >
                Mua ngay
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Detail;
