import React from "react";
import { useDispatch } from "react-redux";
import { ModalWindowActions } from "../../actions";

const ProductItem = (props) => {
  const clickHandler = (event) => {
    console.log(props.pageName)
    window.location.href = "/product/" + props.pageName;
    event.preventDefault();
  };

  const dispatch = useDispatch();

  const cartClickHandler = (event) => {
    event.stopPropagation();

    dispatch(ModalWindowActions.productSettings(true, props.id));
  

    event.preventDefault();

    return false;
  };

  return (
    <div className={props.grid ? props.grid : ""} onClick={clickHandler}>
      <div className="product-item" style={{width: "320px", margin: "auto"}}>
        <div className="pi-pic">
          {props.isNew && <div className="tag-new">New</div>}

          <img src={props.picture} alt="" />
          <div className="pi-links">
            <a href="#" className="add-card" onClick={cartClickHandler}>
              <i className="flaticon-bag" />
              <span>Добавить в корзину</span>
            </a>
          </div>
        </div>
        <div className="pi-text">
          <h6>{props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽</h6>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
