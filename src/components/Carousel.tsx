import React from "react";
import { View, Image } from "react-native";
import Carousel from "react-native-snap-carousel";
import { sliderWidth, itemWidth } from "../styles/SliderEntry.style";

const _renderItem = (props: { item: any }) => {
  return (
    <View>
      <Image
        style={{
          width: "100%",
          height: 150,
          resizeMode: "cover",
          borderRadius: 15,
        }}
        source={props.item.illustration}
      />
    </View>
  );
};

const ImageCarousel = (props: { data: any }) => {
  return (
    <Carousel
      data={props.data}
      renderItem={_renderItem}
      sliderWidth={sliderWidth}
      itemWidth={itemWidth}
      inactiveSlideScale={0.8}
      activeSlideAlignment={"start"}
      loop={true}
    />
  );
};

export default ImageCarousel;
