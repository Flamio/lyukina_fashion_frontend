import Header from "../Header";
import Footer from "../Footer";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {ModalWindowActions} from "../actions";
import Product from "../components/Products/Product";
import {useParams} from "react-router";

const ProductPage = () => {

  const dispatch = useDispatch()

  useEffect(() => {
        dispatch(ModalWindowActions.loading(false))
      }
  )

  const params = useParams();

  return (
      <div>
        <Header/>
        <Product/>
        <Footer/>
      </div>
  )
}

export default ProductPage