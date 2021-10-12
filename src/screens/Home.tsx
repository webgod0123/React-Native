import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationInjectedProps } from "react-navigation";
import { Entries } from "../static/entries";

import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton1";
import FixedBtn from "../components/FixedBtn";
import ProgressBar from "../components/ProgressBar";
import ImageCarousel from "../components/Carousel";

type Props = NavigationInjectedProps;

class HomePage extends React.Component<Props> {
  makeNavigationAction = (to: string) => () => {
    this.props.navigation.navigate(to);
  };

  render() {
    return (
      <View style={styles.view}>
        <FixedBtn
          event={this.makeNavigationAction("Modal")}
          img={require("../assets/images/Ham.png")}
        />
        <View style={styles.borderBottom} />
        <View>
          <Text style={styles.name}>Truck Name</Text>
          <View style={styles.status}>
            <Text style={styles.statusName}>Cuisine</Text>
            <View style={styles.dot} />
            <Text style={styles.statusValue}>81%</Text>
          </View>
          <View style={styles.progressBar}>
            <ProgressBar value={0.81} activeColor="#10CCCD" color="#EF697F" />
          </View>
          <View style={{ marginTop: 20 }}>
            <PrimaryButton title="15 Minutes" icon={true} />
          </View>
          <View style={{ marginTop: 35 }}>
            <ImageCarousel data={Entries} />
          </View>
          <View style={{ marginTop: 40 }}>
            <Text style={styles.descriptionTitle}>DESCRIPTION</Text>
            <Text style={styles.description}>
              Est sed orci, tortor netus risus suspendisse enim. Id posuere
              neque scelerisque orci, sit et sed habitant. Habitasse dolor
              pharetra aliquam
            </Text>
          </View>
          <View style={styles.actions}>
            <SecondaryButton title="MENUS" />
            <SecondaryButton title="REVIEWS" />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    padding: 20,
    backgroundColor: "#F5F3F3",
    position: "relative",
  },
  borderBottom: {
    borderRadius: 10,
    width: 50,
    height: 5,
    backgroundColor: "#909090",
    margin: "auto",
  },
  name: {
    fontSize: 24,
    fontWeight: "400",
    lineHeight: 28,
    color: "#3F3D56",
    marginTop: 20,
  },
  status: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  statusName: {
    fontSize: 18,
    lineHeight: 21,
    color: "#3F3D56",
  },
  dot: {
    width: 4,
    height: 4,
    backgroundColor: "#3F3D56",
    borderRadius: 4,
    marginLeft: 10,
  },
  statusValue: {
    color: "#10CCCD",
    fontSize: 18,
    lineHeight: 21,
    marginLeft: 10,
  },
  progressBar: {
    marginTop: 5,
  },
  button: {
    height: 50,
    borderRadius: 25,
    backgroundColor: "#EF697F",
    shadowColor: "#EF697F99",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  descriptionTitle: {
    color: "#EF697F",
    fontSize: 14,
    lineHeight: 16,
  },
  description: {
    fontSize: 18,
    lineHeight: 21,
    color: "#3F3D56",
    marginTop: 5,
  },
  actions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
  },
});

export default HomePage;
