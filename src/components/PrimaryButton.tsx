import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  Platform,
} from "react-native";

const PrimaryButton = (props: { title: string; icon: boolean }) => {
  return (
    <TouchableOpacity style={[styles.button, styles.boxShadow]}>
      {props.icon ? (
        <Image
          style={styles.btnImg}
          source={require("../assets/images/walking.png")}
        />
      ) : null}
      <Text style={styles.label}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    borderRadius: 25,
    backgroundColor: "#EF697F",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  label: {
    color: "white",
    fontSize: 24,
  },
  btnImg: {
    width: 35,
    height: 35,
    marginRight: 15,
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

generateBoxShadowStyle(0, 5, "#EF697F", 0.8, 15, 10, "#EF697F");

export default PrimaryButton;
