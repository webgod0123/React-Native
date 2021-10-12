import React from "react";
import { NavigationInjectedProps } from "react-navigation";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import FixedBtn from "../components/FixedBtn";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";

type Props = NavigationInjectedProps;

class Modal extends React.Component<Props> {
  makeNavigationAction = () => () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={styles.view}>
        <FixedBtn
          event={this.makeNavigationAction()}
          img={require("../assets/images/close.png")}
        />
        <PrimaryButton title="SETTINGS" icon={false} />
        <View style={{ marginTop: 25, width: "100%" }}>
          <SecondaryButton title="LOG OUT" />
        </View>
        <TouchableOpacity onPress={this.makeNavigationAction()}>
          <Text style={styles.close}>CLOSE</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: "#F5F3F3",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    height: "100vh",
    position: "relative",
  },
  close: {
    fontSize: 18,
    color: "#EF697F",
    marginTop: 50,
  },
});

export default Modal;
