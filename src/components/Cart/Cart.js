import { OverlayTrigger } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { CartActions, ModalWindowActions } from "../../actions";
import { useDispatch } from "react-redux";
import { Popover } from "react-bootstrap";
import { useEffect, useState } from "react";
import { ProductService } from "../../services";
import { Toggler } from "../Toggler";
import { useSelector } from "react-redux";

import "./Cart.css";
import { LoadingImage } from "../LoadingImage";

export const Cart = () => {
  const cart = useSelector((s) => {
    return s.cart;
  });

  const dispatch = useDispatch();

  const [cartProducts, setCartProducts] = useState([]);
  const [cartSizes, setCartSizes] = useState([]);

  const [bright, setBright] = useState(false)
  const brightPeriod = 600;
  const [opened, setOpened] = useState(false)

  setTimeout(() => {
    if (opened) {
      setBright(true)
      return
    }
    setBright(!bright)
  }, brightPeriod)

  useEffect(() => {
    if (cart.products.length <= 0) {
      return;
    }
    const productIds = cart.products.map((p) => p.id);
    const sizeIds = cart.products.map((p) => p.size);
    ProductService.getByIds(productIds).then((products) =>
      setCartProducts(products)
    );
    ProductService.getSizeByIds(sizeIds).then((sizes) => setCartSizes(sizes));
  }, [cart.products]);

  const closeButton = (
    <Button onClick={(e) => document.getElementById("cartButton").click()} style={{ width: '100%', marginTop: "5px" }} variant="secondary">
      Закрыть
    </Button>)

  const CartPopover = (
    <Popover id="popover-basic">
      <Popover.Header>Корзина</Popover.Header>
      <Popover.Body>
        {cart.products.length > 0 ? (
          <div>
            <div className="cart-container">
              {cart.products.map((p) => {
                console.log("map popover")
                const product = cartProducts.find((cp) => cp.id === p.id);
                const thumb = product ? product.cart_thumb : ""
                const size = cartSizes.find((cs) => cs.id === p.size);
                return product && size ? (
                  <div
                    className="container product-container"
                    key={Math.random()}
                  >
                    <div className="row" >
                      <div className="col-lg-2 cart-thumb" onClick={() =>
                      (window.location.href =
                        "/product/" + product.page_name)
                      }>
                        <LoadingImage src={thumb}/>
                      </div>
                      <div className="col-lg-2">
                        <p>{product.name}</p>
                        <p>{size.name}</p>
                      </div>
                      <div className="col-lg-2">
                        {((product.price * p.quantity).toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽
                      </div>
                      <div className="toggler col-lg-4">
                        <Toggler
                          onMinValueChange={() =>
                            dispatch(
                              ModalWindowActions.removeFromCart(
                                true,
                                p.id,
                                p.size
                              )
                            )
                          }
                          onChange={(newQuantity) =>
                            dispatch(
                              CartActions.changeQuantity(
                                p.id,
                                p.size,
                                newQuantity
                              )
                            )
                          }
                          numeric
                          initValue={p.quantity}
                        />
                      </div>

                      <div className="col-lg-2 trash-button">
                        <Button
                          variant="outline-dark"
                          onClick={() =>
                            dispatch(
                              ModalWindowActions.removeFromCart(
                                true,
                                p.id,
                                p.size
                              )
                            )
                          }
                        >
                          <FaTrash size={20} />
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                );
              })}
            </div>
            <div className="cart-total container">
              <div className="row">
                <div className="col-4 total-header">Итого:</div>
                <div className="col-8 total-value">
                  {cart.products.reduce((prev, current) => {
                    const product = cartProducts.find(
                      (cp) => cp.id === current.id
                    );
                    return (
                      Number(prev) +
                      Number(product ? product.price : 0) *
                      Number(current.quantity)
                    ).toFixed(2)
                  }, 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
                  ₽
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-12">
                {closeButton}
              </div>
              <div className="col-lg-8 col-md-12">
                <Button style={{ width: '100%', marginTop: "5px" }} className="pull-right" variant="primary">
                  Перейти к оформлению
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <p>Корзина пуста</p>
            {closeButton}
          </div>
        )}
      </Popover.Body>
    </Popover>
  );

  return (
    <OverlayTrigger trigger={"click"} placement="bottom" overlay={CartPopover}>
      <div onClick={() => setOpened(!opened)} className={`user-panel pull-right ${cart.products.length > 0 && bright ? 'bright' : ''}`} id="cartButton">
        <div className="up-item">
          <div className="shopping-card">
            <i className="flaticon-bag"></i>
            <span>{cart.products.length}</span>
          </div>
        </div>
      </div>
    </OverlayTrigger>
  );
};
