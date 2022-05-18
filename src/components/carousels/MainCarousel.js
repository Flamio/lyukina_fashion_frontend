import React from "react";
import MainCarouselItem from "./MainCarouselItem";
import { Carousel } from "react-responsive-carousel";

import "./carousel.css";

export const MainCarousel = () => {

  const onRenderItem = (node, options) => {
    if (node.props.id === 1)
    return (
      <MainCarouselItem
          picture={node.props.src}
          minPrice={5000}
          header="Новое поступление!!"
          description="ывпавпаьлтмывлоатмволыалВАЛАОТАМОЛАТМОАЛТМОЛ"
        />
    )
    if (node.props.id === 2)
    return (
      <MainCarouselItem
          picture={node.props.src}
          minPrice={5000}
          header="Новое поступление!!"
          description="ывпавпаьлтмывлоатмволыалВАЛАОТАМОЛАТМОАЛТМОЛ"
        />
    )
  };

  return (
    <section className="hero-section">
      <Carousel
        renderItem={onRenderItem}
        autoPlay
        showThumbs={false}
        infiniteLoop
        showStatus={false}
        className={"hero-slider"}
        interval={3000}
        swipeable={false}
      >
        <img id={1} src="img/bg-3.jpg" alt="" />
        <img id={2} src="img/bg.jpg" alt="" />
      </Carousel>
    </section>
  );
};

export default MainCarousel;
