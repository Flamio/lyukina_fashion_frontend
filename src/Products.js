import React from "react";
import ProductItem from "./ProductItem";

export default class Products extends React.Component {
  render() {
    return (<section className="product-filter-section">
          <div className="container">
            <div className="section-title">
              <h2>BROWSE TOP SELLING PRODUCTS</h2>
            </div>
            <ul className="product-filter-menu">
              <li><a href="#">TOPS</a></li>
              <li><a href="#">JUMPSUITS</a></li>
              <li><a href="#">LINGERIE</a></li>
              <li><a href="#">JEANS</a></li>
              <li><a href="#">DRESSES</a></li>
              <li><a href="#">COATS</a></li>
              <li><a href="#">JUMPERS</a></li>
              <li><a href="#">LEGGINGS</a></li>
            </ul>
            <div className="row">
              <ProductItem picture='img/product/5.jpg' description='Топ'
                           price={3000}
                           grid="col-lg-3 col-sm-6"/>
              <ProductItem picture='img/product/2.jpg' description='Платье'
                           price={5000}
                           grid="col-lg-3 col-sm-6"
              />
              <ProductItem picture='img/product/7.jpg' description='Платье 2'
                           price={6000}
                           grid="col-lg-3 col-sm-6"
              />
              <ProductItem picture='img/product/4.jpg' description='Платье 3'
                           price={7000}
                           grid="col-lg-3 col-sm-6"/>
            </div>
            <div className="text-center pt-5">
              <button className="site-btn sb-line sb-dark">ЕЩЕ</button>
            </div>
          </div>
        </section>
    )
  }
}