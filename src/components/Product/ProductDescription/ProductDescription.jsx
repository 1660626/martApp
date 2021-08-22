import React, { useState, useEffect, useCallback } from "react";

import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
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
const ProductDescription = ({}) => {
  const [textShown, setTextShown] = useState(false);
  const [numLines, setNumLines] = useState(undefined);

  useEffect(() => {
    setNumLines(textShown ? undefined : 3);
  }, [textShown]);

  const toggleTextShown = () => {
    setTextShown(!textShown);
  };

  const onTextLayout = useCallback(
    (e) => {
      if (e.nativeEvent.lines.length > 3 && !textShown) {
        setNumLines(3);
      }
    },
    [textShown]
  );
  return (
    <View>
      <Text
        style={{
          fontSize: 14,
          color: "#666",
        }}
        onTextLayout={onTextLayout}
        numberOfLines={numLines}
        ellipsizeMode="tail"
      >
        Rau củ quả tươi thường chứa rất nhiều chất dinh dưỡng thiết yếu cho cơ
        thể của chúng ta nhưng theo thói quen chung hiện nay, bạn thường mua
        nhiều loại thực phẩm tươi ngon và bảo quản trong tủ lạnh để chế biến món
        ăn trong cả tuần, chính thói quen này có thể dẫn đến những ảnh hưởng
        nghiêm trọng đến sức khỏe của chúng ta nếu không biết cách bảo quản thực
        phẩm đúng cách sau khi mua về.
      </Text>
      <TouchableOpacity onPress={toggleTextShown}>
        <Text
          style={{
            fontSize: 16,
            marginTop: 5,
            color: "#5cc16b",
            fontWeight: "bold",
            textAlign: "right",
          }}
        >
          {textShown ? "Thu gọn " : "Xem thêm "}
          {textShown ? (
            <AntDesign name="up" size={16} color="#5cc16b" />
          ) : (
            <AntDesign name="down" size={16} color="#5cc16b" />
          )}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductDescription;
