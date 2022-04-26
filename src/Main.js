import React, {useEffect} from 'react'
import MainCarousel from "./components/carousels/MainCarousel";
import Header from "./Header";
import NewsCarousel from "./components/carousels/NewsCarousel";
import Products from "./components/Products/Products";
import Footer from "./Footer";
import {useDispatch} from "react-redux";
import {MainPageActions} from "./actions";

export default function Main() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(MainPageActions.getAll(0))
  }, [dispatch])

  return (<div>
    <Header/>
    <div className={"content-field"}>
      <MainCarousel/>
      <NewsCarousel/>
      <Products/>
    </div>
    <Footer/>
  </div>)
}
