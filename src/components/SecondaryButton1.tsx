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
    width: "46%",
    height: 50,
    borderRadius: 25,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    color: "#3F3D56",
    fontSize: 14,
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
