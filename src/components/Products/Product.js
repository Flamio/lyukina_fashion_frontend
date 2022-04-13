import ReactOwlCarousel from "react-owl-carousel";
import {useEffect} from "react";
import {useParams} from "react-router";

const Product = () => {

  const thumbsCarouselOptions = {
    loop: false,
    margin: 0,
    nav: false,
    items: 4,
    dots: false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 1200,
    autoplay: false,
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
      }
    }
  }

  const params = useParams()

  useEffect(() =>
  {
    console.log(params.id)
  })

  return (<section className="product-section content-field">
    <div className="container">
      <div className="back-link">
        <a href="#"> &lt;&lt; Назад в категорию</a>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="product-pic-zoom">
            <img className="product-big-img" src="/img/product/1.jpg"
                 alt=""/>
          </div>
          <div className="product-thumbs" tabIndex="1"
               style={{overflow: "hidden", outline: "none"}}>
            <ReactOwlCarousel className="product-thumbs-track" {...thumbsCarouselOptions}>
              <div className="pt active"
                   data-imgbigurl="img/product/1.jpg"><img
                  src="/img/product/1.jpg" alt=""/></div>
              <div className="pt" data-imgbigurl="/img/product/1.jpg"><img
                  src="/img/product/2.jpg" alt=""/></div>
              <div className="pt" data-imgbigurl="/img/product/2.jpg"><img
                  src="/img/product/3.jpg" alt=""/></div>
              <div className="pt" data-imgbigurl="/img/product/3.jpg"><img
                  src="/img/product/4.jpg" alt=""/></div>
            </ReactOwlCarousel>
          </div>
        </div>
        <div className="col-lg-6 product-details">
          <h2 className="p-title">White peplum top</h2>
          <h3 className="p-price">$39.90</h3>
          <div className="fw-size-choose">
            <p>Size</p>
            <div className="sc-item">
              <input type="radio" name="sc" id="xs-size"/>
              <label htmlFor="xs-size">32</label>
            </div>
            <div className="sc-item">
              <input type="radio" name="sc" id="s-size"/>
              <label htmlFor="s-size">34</label>
            </div>
            <div className="sc-item">
              <input type="radio" name="sc" id="m-size"/>
              <label htmlFor="m-size">36</label>
            </div>
            <div className="sc-item">
              <input type="radio" name="sc" id="l-size"/>
              <label htmlFor="l-size">38</label>
            </div>
            <div className="sc-item disable">
              <input type="radio" name="sc" id="xl-size" disabled/>
              <label htmlFor="xl-size">40</label>
            </div>
            <div className="sc-item">
              <input type="radio" name="sc" id="xxl-size"/>
              <label htmlFor="xxl-size">42</label>
            </div>
          </div>
          <a href="#" className="site-btn">SHOP NOW</a>
          <div id="accordion" className="accordion-area">
            <div className="panel">
              <div className="panel-header" id="headingOne">
                <button className="panel-link active" data-toggle="collapse"
                        data-target="#collapse1" aria-expanded="true"
                        aria-controls="collapse1">information
                </button>
              </div>
              <div id="collapse1" className="collapse show"
                   aria-labelledby="headingOne" data-parent="#accordion">
                <div className="panel-body">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin pharetra tempor so dales. Phasellus sagittis auctor
                    gravida. Integer bibendum sodales arcu id te mpus. Ut
                    consectetur lacus leo, non scelerisque nulla euismod
                    nec.</p>
                  <p>Approx length 66cm/26" (Based on a UK size 8 sample)</p>
                  <p>Mixed fibres</p>
                  <p>The Model wears a UK size 8/ EU size 36/ US size 4 and her
                    height is 5'8"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>)
}

export default Product