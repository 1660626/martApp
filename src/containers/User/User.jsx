import React from "react";
import { View } from "react-native";

import CategoriesList from "~components/Categories/CategoriesList";
import { Insets, dWidth, dHeight, waitings, s, vs, ms, mvs } from "~helper";

const User = () => {
  return (
    <View style={{ paddingHorizontal: vs(10),}}>
      <CategoriesList  />
    </View>
  );
};

export default User;
