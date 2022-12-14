import {useDispatch} from "react-redux";
import {ModalWindowActions} from "../../actions";
import {useState} from "react";
import './MainMenu.css'

export default function MainMenu() {

  const dispatch = useDispatch()

  const showContacts = (event) => {
    dispatch(ModalWindowActions.contacts(true))
    event.preventDefault()
  }

  const [mobileMenuOn, setMobileMenuOn] = useState(false)

  const toggleMenu = (event) => {
    setMobileMenuOn(!mobileMenuOn)
    event.preventDefault()
  }

  const menu = () => {
    return (<div className="col-12">

          <div className="col-lg-2 col-sm-12 menu-item"><a href="#"
                                                 onClick={showContacts}>Контакты</a>
          </div>
        </div>
    )
  }

  const mobileMenu = () => {
    return (
        <div className="container mobile-menu">
          <div className="row menu-toggler">
            <i className="flaticon-menu col-12" onClick={toggleMenu}></i>
          </div>
          <div className={`row main-menu ${mobileMenuOn ? "" : "hidden"}`}>
            {menu()}
          </div>
        </div>)
  }

  const largeMenu = () => {
    return (
        <div className="container large-menu">
          <div className="row main-menu">
          {menu()}
          </div>
        </div>
    )
  }

  return (
      <nav className="main-navbar">
        {mobileMenu()}
        {largeMenu()}
      </nav>
  )
}