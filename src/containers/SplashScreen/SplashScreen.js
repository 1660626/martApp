import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform,
  ImageBackground,
} from "react-native";
import { Icon } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { s, vs, ms, mvs } from "~helper";
// store redux
const SplashScreen = ({}) => {
  // const setStoregeFirst = async () => {
  //   try {
  //     await AsyncStorage.setItem("@storage_FisrtOpen", "true");
  //     setTypeForm("asdasd")
  //     navigation.navigate("Home");
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  return (
    <View style={styles.container}>
        <StatusBar barStyle="dark-content" hidden={true} translucent={true} />
        <ImageBackground
          style={styles.image}
          resizeMode={"contain"}
          source={require("~/assets/logoEco.png")}
          alt="Alternate Text"
        />

    </View>
    // <View style={styles.container}>
    //   <StatusBar barStyle="dark-content" hidden={true} translucent={true} />
    //   <ImageBackground
    //     source={require("~/assets/bg1.png")}
    //     resizeMode="contain"
    //     style={styles.image}
    //   ></ImageBackground>

    //   <Image
    //     style={styles.image1}
    //     resizeMode={"contain"}
    //     source={require("~/assets/bg2.png")}
    //     alt="Alternate Text"
    //   />
    //   <View
    //     style={styles.image2}
    //     //  style={{position: "absolute", bottom: 0, alignSelf: "flex-end"}}
    //   >
    //     <Image
    //       style={styles.image2}
    //       resizeMode={"contain"}
    //       source={require("~/assets/logos.png")}
    //       alt="Alternate Text"
    //     />
    //   </View>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      //   android: {
      //     backgroundColor: "red",
      //   },
      //   ios: {
      //     backgroundColor: "blue",
      //   },
      default: {
        backgroundColor: "#fffef6",
      },
    }),
  },
  box: {
    width: ms(400),
    // height: verticalScale(400),
    // backgroundColor: "white",
    // borderRadius: 10,
    // padding: scale(5),
    // shadowColor: "black",
    // shadowOpacity: 0.5,
    // shadowRadius: 3,
    // shadowOffset: {
    //   height: 0,
    //   width: 0,
    // },
    // elevation: 2,
  },
  image: {
    flex: 1,
    // width: moderateScale(380),
    // height: verticalScale(350),
    // marginTop: verticalScale(50),
    // flexGrow:1,
    //  height:"100%",
    // alignItems: 'center',
    // justifyContent:'center',
  },
  image1: {
    width: ms(450),
    height: vs(400),
    // marginTop: verticalScale(50),
    position: "absolute",
    left: vs(0),
    top: vs(-75),
    // height:"50%",
    // alignItems: 'center',
    // justifyContent:'center',
  },
  image2: {
    width: ms(130),
    position: "absolute",
    bottom: vs(-10),
    alignSelf: "center",
  },
  title: {
    textAlign: "center",
    fontSize: ms(20),
    fontWeight: "bold",
    marginBottom: vs(10),
    marginTop: vs(10),

    color: "black",
  },
  text: {
    textAlign: "center",
    fontSize: ms(14),
    color: "black",
    lineHeight: vs(25),
  },
  buttonsContainer: {
    // flex: 1,
    // justifyContent: "flex-end",
    alignItems: "center",
  },
  //   button: {
  //     width: moderateScale(150, 0.3),
  //     height: moderateScale(49, 0.3),
  //     borderRadius: 100,
  //     marginBottom: verticalScale(10),
  //     backgroundColor: "#41B6E6",
  //     alignItems: "center",
  //     justifyContent: "center",
  //   },
  //   buttonText: {
  //     fontWeight: "bold",
  //     fontSize: moderateScale(14),
  //     color: "white",
  //   },

  roundButton1: {
    marginTop: vs(30),
    width: ms(60, 0.3),
    height: ms(60, 0.3),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "#30B051",
  },
});

export default SplashScreen;
