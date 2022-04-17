import React from "react";

export default class MainCarouselItem extends React.Component {

  render() {
    return (<div className="hs-item set-bg" style={{background: "url(" + this.props.picture+")"}}>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-7 text-white">
            <span>{this.props.header}</span>
            <p>{this.props.description}</p>
            <a href="#" className="site-btn sb-line">ПОДРОБНЕЕ</a>
          </div>
        </div>
        <div className="offer-card text-white">
          <span>От</span>
          <h2>{this.props.minPrice} ₽</h2>
        </div>
      </div>
    </div>)
  }
}