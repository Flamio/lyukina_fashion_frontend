import Header from "../Header";
import Footer from "../Footer";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import Product from "../components/Products/Product";
import { ProductsActions } from "../actions";
import { useParams } from "react-router";

export const ProductPage = () => {

  const dispatch = useDispatch()
  const params = useParams()

  useEffect(() => {
        dispatch(ProductsActions.get(params.id))  
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