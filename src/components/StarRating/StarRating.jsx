import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { averageRatings } from "~helper";
import _ from "lodash";

const StarRating = ({
  showRespon = false,
  sizeStar = 12,
  reviewRating = false,
  rating,
}) => {
  // This array will contain our star tags. We will include this
  // array between the view tag.
  let stars = [];
  let avgRatings = averageRatings(rating.ratings);

  // Loop 5 times
  for (var i = 1; i <= 5; i++) {
    let path = require("./star-filled1.png");

    // set the path to filled stars
    // let path = require("./star-filled1.png");
    // If ratings is lower, set the path to unfilled stars

    if (avgRatings > 0 && avgRatings < 1 && !Number.isInteger(averageRatings(rating.ratings))) {
      path = require("./star-half.png");
    } else if (avgRatings <= 0) {
      path = require("./star-unfilled.png");
    }
    // if (i > averageRatings(rating.ratings) && !Number.isInteger(averageRatings(rating.ratings))) {
    //   path = require("./star-half.png");
    // }
    stars.push(
      <Image
        style={[styles.image, { width: sizeStar, height: sizeStar }]}
        key={i}
        source={path}
      />
    );
    avgRatings--;
  }

  const creatStar = (number) => {
    let stars = [];
    for (var i = 1; i <= 5; i++) {
      let path = require("./star-filled1.png");
      if (i > number) {
        path = require("./star-unfilled.png");
      }

      stars.push(
        <Image
          style={[styles.image, { width: sizeStar, height: sizeStar }]}
          key={i}
          source={path}
        />
      );
    }
    return stars;
  };

  const StarReView = () => {
    let startReview = [];
    for (var i = 5; i >= 1; i--) {
      startReview.push(
        <View style={styles.reviewStar} key={i}>
          {creatStar(i)}
          <Text style={{ marginLeft: 10 }}>
            {rating && rating.ratings[i - 1]} lượt đánh giá
          </Text>
        </View>
      );
    }
    return <View>{startReview}</View>;
  };

  return (
    <View style={styles.container}>
      {reviewRating ? <StarReView /> : stars}
      {showRespon && (
        <Text style={styles.text}>({rating && _.sum(rating.ratings)})</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#FF00FF",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  image: {
    marginRight: 2,
  },
  text: {
    fontSize: 12,
    marginLeft: 5,
    color: "#262626",

  },
  reviewStar: {
    flexDirection: "row",
    marginBottom: 10,
  },
});

export default StarRating;
