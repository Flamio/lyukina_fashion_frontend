import React from "react";
import ProductItem from "../Products/ProductItem";
import { useSelector } from "react-redux";
import {useWindowWidth} from '@react-hook/window-size'

import "./carousel.css";
import { Carousel } from "react-responsive-carousel";

export const NewsCarousel = () => {
  const newProducts = useSelector((state) => state.products.new);

  const windowWidth = useWindowWidth()

  const renderItem = (node, options) => {
    return (
        <ProductItem
          id={node.props.id}
          isNew={node.props.new}
          picture={node.props.picture}
          description={node.props.name}
          price={node.props.price}
        />
    );
  };

  return (
    newProducts.length && (
      <section className="top-letest-product-section">
        <div className="container">
          <div className="section-title">
            <h2>НОВИНКИ</h2>
          </div>
          <Carousel
            showStatus={false}
            centerMode
            centerSlidePercentage={windowWidth > 1290 ? 30 : 100}
            emulateTouch
            renderItem={renderItem}
            showThumbs={false}
            className="product-slider"
          >
            {newProducts.map((p, index) => (
              <img
                id={p.id}
                src={p.picture}
                isNew={p.new}
                key={p.id}
                picture={p.picture}
                description={p.name}
                price={p.price}
                alt=""
              />
            ))}
          </Carousel>
        </div>
      </section>
    )
  );
};

export default NewsCarousel;
