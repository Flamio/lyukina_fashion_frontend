import { useSelector } from "react-redux";
import MainMenu from "./components/MainMenu/MainMenu";

const Header = () => {

  const cart = useSelector(s => s.cart)

  return (
    <header className="header-section">
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-6 col-lg-2 text-center text-lg-left">
              <a href="/" className="site-logo">
                <img
                  src="/img/logo.png"
                  alt=""
                  style={{ width: "130px", height: "130px" }}
                />
              </a>
            </div>
            <div className="col-6 col-lg-10 mt-auto mb-auto">
              <div className="user-panel pull-right">
                <div className="up-item">
                  <div className="shopping-card">
                    <i className="flaticon-bag"></i>
                    <span>{cart.products.length}</span>
                  </div>
                  <a href="#">Корзина</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MainMenu />
    </header>
  );
};

export default Header
