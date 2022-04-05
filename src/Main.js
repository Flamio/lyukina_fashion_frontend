import React from 'react'
import MainCarousel from "./MainCarousel";
import Header from "./Header";
import NewsCarousel from "./NewsCarousel";
import Products from "./Products";
import Footer from "./Footer";

class Main extends React.Component{

  componentDidMount () {
  }

  render() {
    return (
        <div>
          <Header/>
          <MainCarousel/>
          <NewsCarousel/>
          <Products/>
          <Footer/>
        </div>
    );
  }
}

export default Main;
