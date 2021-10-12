import React from "react";
import { TouchableOpacity, Text, StyleSheet, Platform } from "react-native";

const SecondaryButton = ({ title }: { title: String }) => {
  return (
    <TouchableOpacity style={[styles.button, styles.boxShadow]}>
      <Text style={styles.label}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 50,
    borderRadius: 25,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    color: "#EF697F",
    fontSize: 24,
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

generateBoxShadowStyle(0, 5, "#DBDBDB", 0.8, 15, 10, "#DBDBDB");

export default SecondaryButton;
