import React from "react";
import MainCarouselItem from "./MainCarouselItem";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import './carousel.css'
import ReactOwlCarousel from "react-owl-carousel";

export const MainCarousel = () => {

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    dots: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    navText: ['<i class="flaticon-left-arrow-1"></i>',
      '<i class="flaticon-right-arrow-1"></i>'],
    smartSpeed: 1200,
    autoplay: true
  }

    return (<section className="hero-section">


      <ReactOwlCarousel className="hero-slider" {...options}>

        <MainCarouselItem picture='img/bg-3.jpg' minPrice={5000}
        header="Новое поступление!!"
        description="ывпавпаьлтмывлоатмволыалВАЛАОТАМОЛАТМОАЛТМОЛ"/>

        <MainCarouselItem picture='img/bg.jpg' minPrice={5000}
                          header="Новое поступление!!"
                          description="ывпавпаьлтмывлоатмволыалВАЛАОТАМОЛАТМОАЛТМОЛ"/>
      </ReactOwlCarousel>
    </section>)
}

export default MainCarousel