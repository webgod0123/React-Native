import React from "react";
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  View,
  Platform,
} from "react-native";

const FixedBtn = (props: { img: any; event: Function }) => {
  return (
    <TouchableOpacity style={styles.closeBtnContainer}>
      <View
        style={[styles.closeBtn, styles.boxShadow]}
        onStartShouldSetResponder={() => props.event()}
      >
        <Image style={{ width: 50, height: 50 }} source={props.img} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  closeBtn: {
    borderRadius: 50,
  },
  closeBtnContainer: {
    position: "absolute",
    top: 15,
    left: 15,
    zIndex: 10,
  },
  boxShadow: {},
});

const generateBoxShadowStyle = (
  xOffset: number,
  yOffset: number,
  shadowColorIos: string,
  shadowOpacity: number,
  shadowRadius: number,
  elevation: number,
  shadowColorAndroid: string
) => {
  if (Platform.OS === "ios") {
    styles.boxShadow = {
      shadowColor: shadowColorIos,
      shadowOffset: { width: xOffset, height: yOffset },
      shadowOpacity,
      shadowRadius,
    };
  } else if (Platform.OS === "android") {
    styles.boxShadow = {
      elevation,
      shadowColor: shadowColorAndroid,
    };
  } else {
    styles.boxShadow = {
      shadowColor: shadowColorIos,
      shadowOffset: { width: xOffset, height: yOffset },
      shadowOpacity,
      shadowRadius,
    };
  }
};

generateBoxShadowStyle(0, 3, "#DBDBDB", 0.8, 15, 7, "#DBDBDB");

export default FixedBtn;
