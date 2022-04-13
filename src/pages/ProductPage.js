import Header from "../Header";
import Footer from "../Footer";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {ModalWindowActions} from "../actions";
import Product from "../components/Products/Product";

const ProductPage = () => {

  const dispatch = useDispatch()

  useEffect(() => {
        dispatch(ModalWindowActions.loading(false))
      }
  )

  return (
      <div>
        <Header/>
        <Product/>
        <Footer/>
      </div>
  )
}

export default ProductPage