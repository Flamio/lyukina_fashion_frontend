import React from "react";
import {useSelector} from "react-redux";

export const Loader = () => {

  const loading = useSelector(state => state.modalWindow.loading)

  return ( loading &&
        <div className="preloder">
          <div className="loader"></div>
        </div>)
}

export default Loader