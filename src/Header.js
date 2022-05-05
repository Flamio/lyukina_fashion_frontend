
import { Cart } from "./components/Cart";
import MainMenu from "./components/MainMenu/MainMenu";

import "./Header.css";


const Header = () => {


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
              <Cart/>
            </div>
          </div>
        </div>
      </div>
      <MainMenu />
    </header>
  );
};

export default Header;
