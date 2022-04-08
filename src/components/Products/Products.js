import React from "react";
import ProductItem from "../../ProductItem";
import {useDispatch, useSelector} from "react-redux";
import {ModalWindowActions, ProductsActions} from "../../actions";
import './Products.css'

export const Products = () => {

  const allProducts = useSelector(state => state.products.other)
  const more = useSelector(state => state.products.more)
  const dispatcher = useDispatch()

  const handleProductsMore = (event) => {
    dispatcher(ModalWindowActions.loading(true))
    dispatcher(ProductsActions.getProductsMore())
    event.preventDefault()
  }

  return (<section className="product-filter-section">
        <div className="container">
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

            {allProducts.map(
                p => (<ProductItem isNew={p.new} key={p.id} picture={p.picture}
                                   description={p.name}
                                   price={p.price}
                                   grid="col-lg-3 col-sm-6"/>))}
          </div>
          {more && <div className="text-center pt-5" onClick={handleProductsMore}>
            <button className="site-btn sb-line sb-dark">ЕЩЕ</button>
          </div>}

        </div>
      </section>
  )
}

export default Products