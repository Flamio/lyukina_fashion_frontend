import React from "react";
import ProductItem from "./ProductItem";
import {useSelector} from "react-redux";
import ReactOwlCarousel from "react-owl-carousel";

export const NewsCarousel = () => {
  const newProducts = useSelector(
      state => state.products.new)

  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: false,
    loop: true,
    autoplay: true,
    navText: ['<i class="flaticon-left-arrow-1"></i>',
      '<i class="flaticon-right-arrow-1"></i>'],
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      768: {
        items: 3,
      },
      1200: {
        items: 4,
      }
    }
  };

  return (
      <section className="top-letest-product-section">
        <div className="container">
          <div className="section-title">
            <h2>НОВИНКИ</h2>
          </div>
          {newProducts.length &&
              <ReactOwlCarousel className="product-slider" {...options}>

                {newProducts.map(
                    p => (<ProductItem isNew={p.new} key={p.id}
                                       picture={p.picture}
                                       description={p.name}
                                       price={p.price}/>))}

              </ReactOwlCarousel>
          }
        </div>
      </section>
  )
}

export default NewsCarousel