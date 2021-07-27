import { Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const { width, height } = Dimensions.get("window");

const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

//Default guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = (size) => (shortDimension / guidelineBaseWidth) * size;
const verticalScale = (size) => (longDimension / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;
const moderateVerticalScale = (size, factor = 0.5) =>
  size + (verticalScale(size) - size) * factor;

//////////
export const capitalize = (string = "") => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const waitings = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};
// export const insets = useSafeAreaInsets();
export const Insets = () => useSafeAreaInsets();

export const s = scale;
export const vs = verticalScale;
export const ms = moderateScale;
export const mvs = moderateVerticalScale;
export const dWidth = width;
export const dHeight = height;
//////////////////////////////

import moment from "moment";
const now = moment().utcOffset("+07:00").format("YYYY-MM-DD HH:mm:ss");

export const getTimeDifference = (Start, End = now) => {

  const timeStart = Start ? (Start === "now" ? now : Start) : 0;
  if (timeStart == 0) {
    return 0;
  }

  var diffr = moment.duration(moment(End).diff(moment(timeStart)));
  
  var hours = parseInt(diffr.asHours());
  var minutes = parseInt(diffr.minutes());
  var seconds = parseInt(diffr.seconds());
  var diffTime = hours * 60 * 60 + minutes * 60 + seconds;
  return diffTime;
};

export const formatDoubleDigits = (time) => {
  return time < 10 ? `0${time}` : time;
};

export const getObjDiffTime = (diffTime) => ({
  seconds: formatDoubleDigits(diffTime % 60),
  minutes: formatDoubleDigits(parseInt(diffTime / 60, 10) % 60),
  hours: formatDoubleDigits(parseInt(diffTime / (60 * 60), 10) % 24),
  days: formatDoubleDigits(parseInt(diffTime / (60 * 60 * 24), 10)),
});

export const formatNumber1 = (number = 0) => {
  return parseInt(number)?.toLocaleString() + " ₫";
}

export const formatNumber= (number = 0) => {
  return parseInt(Math.round(number/1000)*1000)?.toLocaleString('vi', {style : 'currency', currency : 'VND'}).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
