import React, { useState, useEffect } from "react";
import { Feather, SimpleLineIcons, AntDesign, EvilIcons } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { s, vs, ms, mvs } from "~helper";
import _ from "lodash";
const SearchBar = ({ placeholder }) => {
  const [search, setSearch] = useState("");
  const onTextChange = (text) => {
    console.log(text);
    setSearch(text);
  };
  const onClear = () => {
    setSearch("");
  };

  const searchSubmit = () => {
    console.log(search);
  };
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <View style={[styles.SectionStyle, styles.Shadow]}>
        <View style={styles.inputStyle}>
          <AntDesign
            name="search1"
            style={styles.ImageStyle}
            size={ms(18)}
            color="black"
          />
          <TextInput
            style={{ flex: 1 }}
            placeholder={placeholder || "Tìm sản phẩm, danh mục,..."}
            underlineColorAndroid="transparent"
            onChangeText={(e) => onTextChange(e)}
            value={search}
            // autoFocus={true}
            // autoCorrect={true}
            onSubmitEditing={searchSubmit}
          />
          {/* <Feather name="shopping-bag" size={24} color="black" /> */}
          {!_.isEmpty(search) && (
            <AntDesign
              name="closecircleo"
              onPress={onClear}
              style={styles.ImageStyleDel}
              size={ms(14)}
              color="black"
            />
          )}
        </View>
      </View>

      <TouchableOpacity style={[styles.Cart, styles.Shadow]}>
      <Feather name="shopping-bag" size={ms(20)} color="#5cc16b" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  SectionStyle: {
    width: "85%",
    marginVertical: vs(10),
  },
  inputStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    height: ms(40),
    borderRadius: 10,
  },
  ImageStyle: {
    marginLeft: vs(15),
    paddingRight: vs(10),

    color: "rgba(0,0,0,0.5)",
    alignItems: "center",
  },
  ImageStyleDel: {
    paddingRight: vs(10),
    margin: vs(5),
    color: "rgba(0,0,0,0.2)",
  },
  Cart: {
justifyContent: "center",
    height: ms(40),
    padding: 10,
    marginLeft: vs(10),
    backgroundColor: "#fff",
    borderRadius: 10,
   
  },
  Shadow:{
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "#000",
    elevation: 8,
    shadowOpacity: 0.2,
    shadowRadius: 5.0,
  }
});

export default SearchBar;
