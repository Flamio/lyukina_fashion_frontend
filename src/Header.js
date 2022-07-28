
import { Cart } from "./components/Cart";
import MainMenu from "./components/MainMenu/MainMenu";
import { ViewConstants } from "./constants";


const Header = () => {


  return (
    <header className="header-section">
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4 text-center text-lg-left">
              <a href="/" className="site-logo">
                <img
                  src="/img/logo.svg"
                  alt=""
                  style={{ width: "130px", height: "130px" }}
                />
              </a>

            </div>
            <div className="col-12 mt-lg-4 mb-2 col-lg-6 text-center text-lg-left">
              <h2>{ViewConstants.CONTACT_PHONE}</h2>
            </div>
          </div>
        </div>
      </div>
      <MainMenu />
    </header>
  );
};

export default Header;
