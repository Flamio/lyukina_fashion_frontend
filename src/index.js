import React from 'react';
import { render } from "react-dom";
import { Provider } from "react-redux";
import Main from "./Main";
import { Store } from "./Store";
import { configureFakeBackend } from "./fake-backend/FakeBackend";
import { BrowserRouter,  Route, Routes } from 'react-router-dom'
import Loader from "./components/Loader/Loader";
import { ProductPage } from './pages/ProductPage';
import {AddToCartModal, ContactsModal, ProductSettingsModal } from './components/Modal'
import { MobileScroll } from './components/MobileScroll';

render(
  <Provider store={Store}>
    <Loader />
    <ContactsModal />
    <AddToCartModal />
    <MobileScroll />
    <ProductSettingsModal />
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"/product"} element={<ProductPage />}>
          <Route path={":id"} element={<ProductPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
)
