import React from "react";
import MainCarouselItem from "./MainCarouselItem";

export default class MainCarousel extends React.Component {

  render() {
    return (<section className="hero-section">
      <div className="hero-slider owl-carousel">
        <MainCarouselItem picture='img/bg-3.jpg' minPrice={5000}
                          header="Новое поступление!!" description="ывпавпаьлтмывлоатмволыалВАЛАОТАМОЛАТМОАЛТМОЛ"/>
        <MainCarouselItem picture='img/bg-2.jpg' minPrice={500}
                          header="Новое поступление 2!!" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Quis ipsum sus-pendisse ultrices gravida. Risus commodo
              viverra maecenas accumsan lacus vel facilisis. "/>
      </div>
      <div className="container">
        <div className="slide-num-holder" id="snh-1"></div>
      </div>
    </section>)
  }

}