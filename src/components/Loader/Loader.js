import React from "react";
import {useSelector} from "react-redux";
import {CSSTransition} from "react-transition-group";

import './Loader.css'

export const Loader = () => {

  const loading = useSelector(state => state.modalWindow.loading)

  return (
      <CSSTransition classNames="loader-transitions" in={loading} timeout={500}
                     unmountOnExit>
        <div className="preloder">
          <div className="loader"></div>
        </div>
      </CSSTransition>)
}

export default Loader