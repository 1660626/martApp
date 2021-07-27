import React, { useState } from "react";
import { Center, NativeBaseProvider, Button } from "native-base";
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

import { useSelector, useDispatch } from "react-redux";
import { setTypeCategoriesList } from "~/redux/form";

const CategoriesList = ({}) => {
  const dispatch = useDispatch();

  const formData = useSelector((state) => state.form);

  const { categoriesList, typeCategoriesList } = formData;
  // console.log(useSelector((state) => state.form.typeCategoriesList));
  // // console.log(props);
  const handlerPress = (item) => {
    dispatch(setTypeCategoriesList(item));

    // props.setTypeCategoriesList(item);
  };
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {categoriesList.map((item, index) => (
          <TouchableOpacity
            onPress={() => handlerPress(item)}
            key={index}
            style={{
              height: ms(40),
              alignItems: "center",
              padding: vs(10),
              // backgroundColor:"red"
            }}
          >
            <Text
              style={{
                color: item === typeCategoriesList ? "#70c675" : "#c8c8c8",
                fontWeight: "bold",
              }}
            >
              {item}
              {/* c8c8c8 */}
            </Text>
            {item === typeCategoriesList && (
              <View
                style={{
                  backgroundColor: "#70c675",
                  height: ms(7),
                  width: ms(7),

                  borderRadius: 20,
                  bottom: 0,
                  position: "absolute",
                }}
              />
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoriesList;
