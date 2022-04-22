import { Carousel } from "react-responsive-carousel";
import { useDispatch, useSelector } from "react-redux";
import { CartActions } from "../../actions";
import InnerImageZoom from "react-inner-image-zoom";

import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Product = () => {
  const dispatch = useDispatch();

  const addToCartHandler = (event) => {
    dispatch(CartActions.putProduct(product.id));
    event.preventDefault();
  };

  const product = useSelector((s) => s.products.current);

  const thumbs = product.thumbs ? product.thumbs.trim().split(",") : [];
  const bigPics = product.thumbs ? product.big_pics.trim().split(",") : [];
  const sizes = product.sizes ? product.sizes : [];

  const onRenderItem = (item, options) => {
    const index = item.props.id;

    return (
      <InnerImageZoom
        src={thumbs[index]}
        zoomSrc={bigPics[index]}
        zoomScale={0.7}
        fullscreenOnMobile={true}
        mobileBreakpoint={990}
        zoomType={"hover"}
      />
    );
  };

  return (
    <section className="product-section content-field">
      <div className="container">
        <div className="back-link">
          <a href="#"> &lt;&lt; Назад в категорию</a>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <Carousel renderItem={onRenderItem} showStatus={false}>
              {thumbs.map((th, index) => {
                return (
                  <div key={index} id={index}>
                    <img id={index} src={th} alt="" />
                  </div>
                );
              })}
            </Carousel>
          </div>
          <div className="col-lg-6 product-details">
            <h2 className="p-title">{product.name}</h2>
            <h3 className="p-price">{product.price} ₽</h3>
            <div className="fw-size-choose">
              <p>Размер</p>

              {sizes.map((s) => {
                return (
                  <div key={s} className={`sc-item`}>
                    <input type="radio" name="sc" id={s} />
                    <label htmlFor={s}>{s}</label>
                  </div>
                );
              })}
            </div>
            <a href="#" className="site-btn" onClick={addToCartHandler}>
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
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin pharetra tempor so dales. Phasellus sagittis auctor
                      gravida. Integer bibendum sodales arcu id te mpus. Ut
                      consectetur lacus leo, non scelerisque nulla euismod nec.
                    </p>
                    <p>Approx length 66cm/26" (Based on a UK size 8 sample)</p>
                    <p>Mixed fibres</p>
                    <p>
                      The Model wears a UK size 8/ EU size 36/ US size 4 and her
                      height is 5'8"
                    </p>
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
