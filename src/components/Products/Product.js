import ReactOwlCarousel from "react-owl-carousel";
import { useDispatch, useSelector } from "react-redux";
import { CartActions } from "../../actions";

const Product = () => {
  const thumbsCarouselOptions = {
    loop: false,
    margin: 0,
    nav: false,
    items: 4,
    dots: false,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    smartSpeed: 1200,
    autoplay: false,
    stagePadding: 10,
    responsive: {
      0: {
        items: 3,
      },
      480: {
        items: 3,
      },
      768: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  };

  const dispatch = useDispatch()

  const addToCartHandler = (event) => {
    dispatch(CartActions.putProduct(product.id))
    event.preventDefault()
  }

  const product = useSelector((s) => s.products.current);

  const thumbs = product.thumbs ? product.thumbs.trim().split(",") : [];
  const size = product.thumbs ? product.size.trim().split(",") : [];
  const availableSizes = product.thumbs
    ? product.available_sizes.trim().split(",")
    : [];

  return (
    <section className="product-section content-field">
      <div className="container">
        <div className="back-link">
          <a href="#"> &lt;&lt; Назад в категорию</a>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="product-pic-zoom">
              <img className="product-big-img" src={product.picture} alt="" />
            </div>
            <div
              className="product-thumbs"
              tabIndex="1"
              style={{ overflow: "hidden", outline: "none" }}
            >
              {thumbs.length && (
                <ReactOwlCarousel
                  className="product-thumbs-track"
                  {...thumbsCarouselOptions}
                >
                  {
                    <div key={-1} className="pt active" data-imgbigurl={product.picture}>
                      <img src={product.picture} alt="" />
                    </div>
                  }

                  {thumbs.map((th, index) => {
                    return (
                      <div key={index} className="pt" data-imgbigurl={th}>
                        <img src={th} alt="" />
                      </div>
                    );
                  })}
                </ReactOwlCarousel>
              )}
            </div>
          </div>
          <div className="col-lg-6 product-details">
            <h2 className="p-title">{product.name}</h2>
            <h3 className="p-price">{product.price} ₽</h3>
            <div className="fw-size-choose">
              <p>Размер</p>

              {availableSizes.map((s) => {
                const isDisabled = !size.includes(s)
                return (
                  <div key={s}
                    className={`sc-item ${isDisabled ? "disable" : ""}`}
                  >
                    <input type="radio" name="sc" id={s} disabled={isDisabled}/>
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
