import {useDispatch} from "react-redux";
import {ModalWindowActions} from "./actions";
import {useState} from "react";

export default function MainMenu() {

  const dispatch = useDispatch()

  const showContacts = (event) => {
    dispatch(ModalWindowActions.show())
    event.preventDefault()
  }

  const [menuOn, setMenuOn] = useState(true)

  const toggleMenu = (event) => {
    setMenuOn(!menuOn)
    event.preventDefault()
  }

  return (<nav className="main-navbar">
    <div className="container">
      <div className="row menu-toggler">
        <i className="flaticon-menu col-12" onClick={toggleMenu}></i>
      </div>
      <div className={`row main-menu ${menuOn ? "" : "hidden"}`}>
        <div className="col-lg-1 col-sm-12"><a href="#">Платья</a></div>
        <div className="col-lg-3 col-sm-12"><a href="#">Свадебные платья</a>
        </div>
        <div className="col-lg-2 col-sm-12"><a href="#">Топы
          <span className="new">New</span>
        </a></div>
        <div className="col-lg-2 col-sm-12"><a href="#">Корсеты</a>
        </div>
        <div className="col-lg-2 col-sm-12"><a href="#">Мужское</a>
          <ul className="sub-menu">
            <li><a href="#">Футбики</a></li>
            <li><a href="#">Штаны</a></li>
          </ul>
        </div>
        <div className="col-lg-2 col-sm-12"><a href="#"
                                               onClick={showContacts}>Контакты</a>
        </div>
      </div>
    </div>
  </nav>)
}