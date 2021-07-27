import React, { useState, useEffect } from "react";

import { View, Text, StyleSheet } from "react-native";
import { getObjDiffTime, getTimeDifference } from "~helper";

import moment from "moment";
const ClockCountDown = ({ size = 15, startTime, endTime }) => {
  const [totalDuration, setTotalDuration] = useState(
    getTimeDifference(startTime, endTime )
  );
  useEffect(() => {
    const timer = setInterval(() => {
      setTotalDuration(totalDuration - 1);
    }, 1000);
    return () => clearInterval(timer);
  });

  const DoubleDigits = (digits, last = true) => {
    return (
      <View>
        <View style={styles.timeInnerCont}>
          <View
            style={[
              styles.digitCont,
              {
                width: size * 2.3,
                height: size * 1.5,
                backgroundColor: "black",

              },
            ]}
          >
            <Text style={[styles.digitTxt, { fontSize: size }]}>{digits}</Text>
          </View>
          {last && (
            <View>
              <Text style={[styles.separatorTxt, { fontSize: size * 1.5 }]}>
                {":"}
              </Text>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.timeCont}>
      {DoubleDigits(getObjDiffTime(totalDuration).hours)}
      {DoubleDigits(getObjDiffTime(totalDuration).minutes)}
      {DoubleDigits(getObjDiffTime(totalDuration).seconds, false)}
    </View>
  );
};

const styles = StyleSheet.create({
  timeCont: {
    flexDirection: "row",
    alignItems: "center",
  },
  timeInnerCont: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

  
  },
  digitCont: {
    borderRadius: 5,
    marginHorizontal: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  digitTxt: {
    color: "white",
    fontWeight: "bold",
  },
  separatorTxt: {
    backgroundColor: "transparent",
    fontWeight: "bold",
  },
});
export default ClockCountDown;
