import React from "react";

const ProductItem = (props) => {

  const clickHandler = (event) => {
    window.location.href = "/product/"+props.id
    event.preventDefault();
  }

    return (
        <div className={props.grid ? props.grid : ""} onClick={clickHandler}>
          <div className="product-item">
            <div className="pi-pic">

              {props.isNew && (<div className="tag-new">New</div>)}

              <img src={props.picture} alt=""/>
              <div className="pi-links">
                <a href="#" className="add-card"><i
                    className="flaticon-bag"/><span>Добавить в корзину</span></a>
              </div>
            </div>
            <div className="pi-text">
              <h6>{props.price} ₽</h6>
              <p>{props.description}</p>
            </div>
          </div>
        </div>)
}

export default ProductItem