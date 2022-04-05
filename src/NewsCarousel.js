import React from "react";
import ProductItem from "./ProductItem";

export default class NewsCarousel extends React.Component {
  render() {
    return (
        <section className="top-letest-product-section">
          <div className="container">
            <div className="section-title">
              <h2>НОВИНКИ</h2>
            </div>
            <div className="product-slider owl-carousel">
              <ProductItem picture='img/product/1.jpg' isNew={true} description='Топ' price={3000}/>
              <ProductItem picture='img/product/2.jpg' description='Платье' price={5000}/>
              <ProductItem picture='img/product/3.jpg' description='Платье 2' price={6000}/>
              <ProductItem picture='img/product/4.jpg' description='Платье 3' price={7000}/>
            </div>
          </div>
        </section>
    )
  }
}