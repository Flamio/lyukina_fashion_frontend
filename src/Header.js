import React from "react";
import MainMenu from "./components/MainMenu/MainMenu";

export default class Header extends React.Component {
  render() {
    return (<header className="header-section">
          <div className="header-top">
            <div className="container">
              <div className="row">
                <div className="col-6 col-lg-2 text-center text-lg-left">
                  <a href="/" className="site-logo">
                    <img src="img/logo.png" alt="" style={{width: '130px', height: '130px'}}/>
                  </a>
                </div>
                <div className="col-6 col-lg-10 mt-auto mb-auto">
                  <div className="user-panel pull-right">
                    <div className="up-item">
                      <div className="shopping-card">
                        <i className="flaticon-bag"></i>
                        <span>0</span>
                      </div>
                      <a href="#">Корзина</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <MainMenu/>
        </header>
    )
  }
}