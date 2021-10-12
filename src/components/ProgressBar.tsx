import React from "react";
import * as Progress from "react-native-progress";

const ProgressBar = (props: {
  value: number;
  activeColor: string;
  color: string;
}) => {
  return (
    <Progress.Bar
      progress={props.value}
      width={170}
      height={4}
      color={props.activeColor}
      unfilledColor={props.color}
      borderWidth={0}
    />
  );
};

export default ProgressBar;
