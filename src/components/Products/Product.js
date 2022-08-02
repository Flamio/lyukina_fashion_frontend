import { Carousel } from "react-responsive-carousel";
import { useDispatch, useSelector } from "react-redux";
import { CartActions, ModalWindowActions } from "../../actions";
import { useState } from "react";
import { LoadingImage } from "../LoadingImage";



import "../carousels/carousel.css"

import "react-responsive-carousel/lib/styles/carousel.min.css";



import "./Product.css"
import { Toggler } from "../Toggler";

const Product = () => {
  const dispatch = useDispatch();

  const addToCartHandler = (event) => {
    dispatch(CartActions.putProduct({ id: product.id, quantity, size: sizes[size - 1].id }));
    event.preventDefault();
  };

  const product = useSelector((s) => s.products.current);

  const thumbs = product.thumbs ? product.thumbs : [];
  const bigPics = product.big_pics ? product.big_pics : [];
  const sizes = product.sizes ? product.sizes : [{ name: "..." }];

  const [size, setSize] = useState(1);
  const [quantity, setQuantity] = useState(1);
  let loadingImages = 0;


  const imageCount = ((bigPics.length + thumbs.length))

  const onImageLoad = () => {    
    loadingImages = loadingImages + 1
    console.log("count " + loadingImages + " imageCount " + imageCount)
    if (loadingImages === imageCount)
      dispatch(ModalWindowActions.loading(false));
  }

  const onRenderItem = (item, options) => {
    const index = item.props.id;

    return (
      <LoadingImage onLoad={() => onImageLoad()} src={bigPics[index]} zoom />
    );
  };

  const onRenderThumbs = () => {
    console.log("render thumbs")
    return thumbs.map((th, index) =>
      <LoadingImage onLoad={() => onImageLoad()} src={th} key={index} />
    )
  }

  return (
    <section className="product-section content-field">
      <div className="container">
        <div className="back-link">
          <a href="/"> &lt;&lt; Назад</a>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <Carousel renderItem={onRenderItem} renderThumbs={onRenderThumbs} showStatus={false} swipeable={false}>
              {thumbs.map((th, index) => {
                return (
                  <div key={index} id={index}>
                    <LoadingImage src={th} />
                  </div>
                );
              })}
            </Carousel>
          </div>
          <div className="col-lg-6 product-details">
            <h2 className="p-title">{product.name}</h2>
            <h3 className="p-price">{product.price && product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽</h3>
            <Toggler onChange={(value) => { setQuantity(value) }} textAlign='left' text="Количество" numeric style={{ marginTop: '40px' }} />
            <Toggler onChange={(value) => { setSize(value) }} textAlign='left' text="Размер" data={sizes.map(s => s.name)} />
            <a href="#" className="site-btn" style={{ marginTop: '35px' }} onClick={addToCartHandler}>
              Добавить в корзину
            </a>
            <div id="accordion" className="accordion-area">
              <div className="panel">
                <div className="panel-header" id="headingOne">
                  <button
                    className="panel-link active"
                    data-toggle="collapse"
                    data-target="#collapse1"
                    aria-expanded="true"
                    aria-controls="collapse1"
                  >
                    Информация
                  </button>
                </div>
                <div
                  id="collapse1"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordion"
                >
                  <div className="panel-body">
                    {product.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
