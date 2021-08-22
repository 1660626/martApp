import React from "react";
import { View, Text } from "react-native";
import _ from "lodash";
import StarRating from "~components/StarRating/StarRating";
import { averageRatings } from "~helper";
const ProductReviews = ({ rating }) => {
  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            flex: 4,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 26 }}>{averageRatings(rating.ratings)}</Text>
          <StarRating rating={rating} sizeStar={15} />
        </View>
        <View
          style={{
            flex: 9,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <StarRating reviewRating sizeStar={15} rating={rating} />
        </View>
      </View>
    </View>
  );
};

export default ProductReviews;
