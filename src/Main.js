import React, {useEffect} from 'react'
import MainCarousel from "./MainCarousel";
import Header from "./Header";
import NewsCarousel from "./NewsCarousel";
import Products from "./Products";
import Footer from "./Footer";
import Loader from './Loader'
import ContactsModal from "./ContactsModal";

export default function Main() {

  return (<div>
    <Header/>
    <MainCarousel/>
    <NewsCarousel/>
    <Products/>
    <Footer/>
    <Loader/>
    <ContactsModal/>
  </div>)
}
