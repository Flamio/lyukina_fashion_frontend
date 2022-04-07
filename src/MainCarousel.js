import React from "react";
import MainCarouselItem from "./MainCarouselItem";

export default class MainCarousel extends React.Component {

  render() {
    return (<section className="hero-section">
      <div className="hero-slider owl-carousel">
        <MainCarouselItem picture='img/bg-3.jpg' minPrice={5000}
                          header="Новое поступление!!" description="ывпавпаьлтмывлоатмволыалВАЛАОТАМОЛАТМОАЛТМОЛ"/>
      </div>
      <div className="container">
        <div className="slide-num-holder" id="snh-1"></div>
      </div>
    </section>)
  }

}