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
} from "react-native";
import { Icon } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { connect } from "react-redux";
import { setTypeForm, selectTypePage } from '~/redux/form';
// store redux
const SplashScreen = ({
  setTypeForm,
  typeForm,
  navigation,
  route,
  ...props
}) => {
  const setStoregeFirst = async () => {
    try {
      await AsyncStorage.setItem("@storage_FisrtOpen", "true");
      setTypeForm("asdasd")
      navigation.navigate("Home");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <StatusBar barStyle="dark-content" hidden={true} translucent={true} />
        <Image
          style={styles.image}
          resizeMode={"contain"}
          source={require("~/assets/top-view-assortment-vegetables-paper-bag.png")}
          alt="Alternate Text"
        />

        <Text style={styles.title}>
          Get your grocery at your door step
          {/* - -{ex.width} {ex.height} */}
        </Text>
        <Text style={styles.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.roundButton1}
            onPress={() => setStoregeFirst()}
          >
            <Icon
              color="white"
              as={<AntDesign name="arrowright" />}
              size="md"
            />
          </TouchableOpacity>
          <Text style={styles.title}>
            Let's Get Started
            {/* - -{ex.width} {ex.height} */}
          </Text>
        </View>
      </View>
    </View>
  );
};

const { height, width } = Dimensions.get("window");

const guidelineBaseWidth = 360;
const guidelineBaseHeight = 592;

const scale = (size) => (width / guidelineBaseWidth) * size;
const verticalScale = (size) => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      //   android: {
      //     backgroundColor: "red",
      //   },
      //   ios: {
      //     backgroundColor: "blue",
      //   },
      default: {
        backgroundColor: "#ede8e2",
      },
    }),
  },
  box: {
    width: moderateScale(400),
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
    width: moderateScale(400),
    height: verticalScale(350),
    // marginTop: verticalScale(50),
    // flexGrow:1,
    // height:350,
    // width:"auto",
    // alignItems: 'center',
    // justifyContent:'center',
  },
  title: {
    textAlign: "center",
    fontSize: moderateScale(20),
    fontWeight: "bold",
    marginBottom: verticalScale(10),
    marginTop: verticalScale(10),

    color: "black",
  },
  text: {
    textAlign: "center",
    fontSize: moderateScale(14),
    color: "black",
    lineHeight: verticalScale(25),
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
    marginTop: 30,
    width: moderateScale(60, 0.3),
    height: moderateScale(60, 0.3),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "#30B051",
  },
});

const mapStateToProps = (state, myOwnProps) => {
  return {
    typeForm: state.form.typeForm,
  };
};

const mapDispatchToProps = {
  setTypeForm
};
export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
