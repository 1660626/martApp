import React, { useState, useEffect, useRef , useCallback} from "react";

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
import { Feather, SimpleLineIcons, AntDesign } from "@expo/vector-icons";
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

const Detail = ({ navigation, route }) => {
  const { product, priceNew } = route.params;
  const [activeHeart, setActiveHeart] = useState(false);
  const [animatedValue, setAnimatedValue] = useState(`rgba(255, 255, 255,0)`);
  const [shadowOpacity, setshadowOpacity] = useState(0.2);
  const [shadowOpacityAndroid, setshadowOpacityAndroid] = useState(8);




  const [textShown, setTextShown] = useState(false);
  const [numLines, setNumLines] = useState(undefined);

  const toggleTextShown = () => {
    setTextShown(!textShown);
  };

  useEffect(() => {
    setNumLines(textShown ? undefined : 3);
  }, [textShown]);

  const onTextLayout = useCallback(
    (e) => {
      if (e.nativeEvent.lines.length > 3 && !textShown) {
        setNumLines(3);
      }
    },
    [textShown],
  );
  return (
    <View>
      <View
        style={{
          backgroundColor: animatedValue,
          position: "absolute",
          top: 0,
          flex: 1,
          alignSelf: "stretch",
          right: 0,
          left: 0,
          zIndex: 10000,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: vs(10),
            marginTop: vs(Insets().top) + 10,
            marginBottom: 10,
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
                styles.Shadow,
                {
                  shadowOpacity: shadowOpacity,
                  elevation: shadowOpacityAndroid,
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

      <ScrollView
        onScroll={(event) => {
          const scrolling = event.nativeEvent.contentOffset.y;
          console.log(scrolling);

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
      >
        <View style={{ height: 3000, backgroundColor: "white" }}>
          <View style={{ width: "100%", height: 300, padding: 80 }}>
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
          <View>
            <Text
              style={{
                paddingHorizontal: 20,
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              {product.name}
            </Text>
            <Text
              style={{
                paddingHorizontal: 20,
                fontWeight: "400",
                lineHeight: 15,
                fontSize: 16,
                color: "#a9a9b1",
                marginTop: 8,
              }}
            >
              {"0.8Kg - 1Kg"}
            </Text>

            <Text
              style={{
                paddingHorizontal: 20,
                fontSize: 20,
                fontWeight: "bold",
                marginTop: 10,
                color: "#ff6162",
              }}
            >
              {formatNumber(priceNew)}
            </Text>

            <Text
              style={{
                paddingHorizontal: 20,
                fontSize: 16,
                fontWeight: "bold",
                marginTop: 15,
              }}
            >
              Mô tả sản phẩm:
            </Text>
            <Text
              style={{
                paddingHorizontal: 20,
                fontSize: 16,
                marginTop: 15,
              }}
              onTextLayout={onTextLayout} numberOfLines={numLines}
              ellipsizeMode="tail"
            >
              Rau củ quả tươi thường chứa rất nhiều chất dinh dưỡng thiết yếu
              cho cơ thể của chúng ta nhưng theo thói quen chung hiện nay, bạn
              thường mua nhiều loại thực phẩm tươi ngon và bảo quản trong tủ
              lạnh để chế biến món ăn trong cả tuần, chính thói quen này có thể
              dẫn đến những ảnh hưởng nghiêm trọng đến sức khỏe của chúng ta nếu
              không biết cách bảo quản thực phẩm đúng cách sau khi mua về. Bài
              viết sau đây sẽ giúp bạn biết cách bảo quản thực phẩm tốt nhất cho
              mình, vừa bảo đảm được giá trị dinh dưỡng vừa chắc chắn giúp bạn
              giữ được độ tươi ngon của thực phẩm mà bạn mua về. 
            </Text>

          
            <TouchableOpacity onPress={toggleTextShown}>
              <Text
                style={{
                  paddingHorizontal: 20,
                  fontSize: 16,
                  marginTop: 5,
                  color: "#5cc16b",
                  fontWeight: "bold",
                  textAlign: "right"
                }}
               >
               {textShown ? 'Thu gọn' : 'Xem thêm'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
    borderRadius: 10,
  },
  Shadow: {
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "#000",
    shadowRadius: 5.0,
  },
});

export default Detail;
