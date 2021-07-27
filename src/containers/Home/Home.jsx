import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  StatusBar,
  RefreshControl,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  Button,
  SafeAreaView,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

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
} from "~helper";
import { SliderBox } from "~components/SliderBox";
import FlashSale from "~components/FlashSale";
import Header from "~containers/Header";
import CategoriesList from "~components/Categories/CategoriesList";
import ProductCard from "~components/Card/ProductCard";
import { hotBanner1 } from "~data/data.js";
const Home = ({ navigation, route }) => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    waitings(2000).then(() => setRefreshing(false));
  }, []);

  const onPressLearnMore = async () => {
    console.log("Done.");
  };

  const images = [
    // require("~/assets/image/banner/banner01.png"),
    // require("~/assets/image/banner/banner02.png"),
    // require("~/assets/image/banner/banner05.png"),
    // require("~/assets/image/banner/banner06.png"),
    // require("~/assets/image/banner/banner07.png"),
    // require("~/assets/image/banner/banner08.png"),
    // require("~/assets/image/banner/banner09.png"),
    // require("~/assets/image/banner/banner10.png"),
    require("~/assets/image/banner/banner11.png"),
    require("~/assets/image/banner/banner12.png"),
    require("~/assets/image/banner/banner13.png"),
    require("~/assets/image/banner/banner14.png"),
    require("~/assets/image/banner/banner15.png"),
    require("~/assets/image/banner/banner16.png"),
  ];
 
  const hotBanner = [
    require("~/assets/hotBanner03.jpg"),
    require("~/assets/hotBanner01.jpg"),
    require("~/assets/hotBanner02.jpg"),
  ];
  return (
    <View
      style={{
        backgroundColor: "#FFFFFF",
      }}
    >
      <LinearGradient
        start={{ x: 1.0, y: 1.0 }}
        end={{ x: 0.0, y: 1.0 }}
        colors={["#8dc55b", "#5cc16b"]}
        style={styles.linearStyle}
      />
      <Header />

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.viewBannerStyle}>
          <SliderBox
            parentWidth={dWidth * 0.85}
            images={images}
            sliderBoxHeight={125}
            // onCurrentImagePressed={(index) =>
            //   console.warn(`image ${index} pressed`)
            // }
            dotColor="#fff"
            inactiveDotColor="#90A4AE"
            paginationBoxVerticalPadding={10}
            autoplay
            circleLoop
            paginationBoxStyle={styles.paginationBoxStyle}
            dotStyle={styles.dotStyle}
            ImageComponentStyle={styles.ImageComponentStyle}
            imageLoadingColor="#2196F3"
            activeOpacity={0.9}
          />
        </View>

        <View
          style={{
            backgroundColor: "#FFFFFF",
            flex: 1,
          }}
        >
          <View
            style={{
              marginTop: 10,
              paddingHorizontal: vs(10),
            }}
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

          <View
            style={{
              marginTop: 10,
              paddingHorizontal: vs(10),
            }}
          >
            <FlashSale
              size={12}
              startTime="now"
              endTime={"2021-07-27 23:59:59"}
            />
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {hotBanner1.map((item, index) => (
                <View
                  key={index}
                  style={{
                    marginRight: vs(5),
                  }}
                >
                  <ProductCard product={item} navigation={navigation} />
                </View>
              ))}
            </ScrollView>
          </View>

          {/* <View style={{ marginTop: 10 }}>

            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {listCategory.map((item, index) => (
                <View
                  key={index}
                  style={{
                    flexDirection: "column",
                    alignItems: "center",
                    marginHorizontal: vs(10),
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 4,
                    },
                    shadowOpacity: 0.3,
                    shadowRadius: 4.65,
                  }}
                >
                  <View
                    style={{
                      padding: ms(15),
                      borderRadius: 15,
                      backgroundColor: "white",
                      elevation: 8,
                    }}
                  >
                    <Image
                      style={{ width: 50, height: 50 }}
                      resizeMode={"cover"}
                      source={item.img}
                      alt="Alternate Text"
                    />
                  </View>
                  <View>
                    <Text
                      style={{
                        marginHorizontal: 5,
                        marginTop: 10,
                        textAlignVertical: "center",
                        textAlign: "center",
                        fontWeight: "bold",
                        color: "rgba(0,0,0,0.7)",
                      }}
                    >
                      {item.name}
                    </Text>
                  </View>
                </View>
              ))}
            </ScrollView>
          </View> */}

          <View style={{ paddingHorizontal: vs(10), marginTop: 50 }}>
            <CategoriesList />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  linearStyle: {
    height: ms(dWidth * 0.5),
    width: dWidth,
    position: "absolute",
    borderRadius: ms(dWidth * 0.1),
  },
  viewBannerStyle: {
    elevation: 89999,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    height: ms(140),
    width: dWidth,
    backgroundColor: "transparent",
  },
  paginationBoxStyle: {
    position: "absolute",
    bottom: 0,
    padding: 0,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  dotStyle: {
    width: 10,
    height: 2,
    borderRadius: 5,
    marginHorizontal: -10,
    padding: 0,
    margin: 0,
    backgroundColor: "rgba(128, 128, 128, 0.92)",
  },
  ImageComponentStyle: {
    borderRadius: 15,
    width: "100%",
    marginTop: 5,
  },
  scrollView: {},
  text: {
    fontSize: 42,
  },

  box: {
    height: 100,
    backgroundColor: "#333",
  },
});

export default Home;
