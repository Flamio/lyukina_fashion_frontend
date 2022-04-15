import React, { useState } from "react";
import ProductItem from "./ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { MainPageActions } from "../../actions";
import "./Products.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import LoaderIcon from "../Loader/LoaderIcon";
import Categories from "../Categories/Categories";

export const Products = () => {
  const allProducts = useSelector((state) => state.products.other);
  const more = useSelector((state) => state.products.more);
  const dispatcher = useDispatch();

  const [load, setLoad] = useState(false);

  const handleProductsMore = (event) => {
    // setLoad(true);
    // dispatcher(MainPageActions.getProductsMore());
    event.preventDefault();
  };


  return (
    <section className="product-filter-section">
      <div className="container">
        <Categories/>
        <TransitionGroup className="row justify-content-center">
          {allProducts.map((p) => (
            <CSSTransition
              timeout={2000}
              key={p.id}
              classNames={"product-items"}
              onEnter={() => setLoad(false)}
            >
              <ProductItem
                id={p.id}
                isNew={p.new}
                key={p.id}
                picture={p.picture}
                description={p.name}
                price={p.price}
                grid="col-lg-3 col-sm-6"
              />
            </CSSTransition>
            
          ))}
        </TransitionGroup>
        {more && (
          <div className="text-center pt-5" onClick={handleProductsMore}>
            <button className="site-btn sb-line sb-dark">
              {load ? <LoaderIcon /> : "ЕЩЕ"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
