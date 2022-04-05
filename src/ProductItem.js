import React from "react";

export default class ProductItem extends React.Component {
  render() {
    return (
        <div className={this.props.grid}>
          <div className="product-item">
            <div className="pi-pic">

              {this.props.isNew && (<div className="tag-new">New</div>)}

              <img src={this.props.picture} alt=""/>
              <div className="pi-links">
                <a href="#" className="add-card"><i
                    className="flaticon-bag"/><span>КУПИТЬ</span></a>
              </div>
            </div>
            <div className="pi-text">
              <h6>{this.props.price} ₽</h6>
              <p>{this.props.description}</p>
            </div>
          </div>
        </div>)
  }
}