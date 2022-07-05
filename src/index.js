import React from 'react';
import { render } from "react-dom";
import { Provider } from "react-redux";
import Main from "./Main";
import { Store } from "./Store";
import { configureFakeBackend } from "./fake-backend/FakeBackend";
import { BrowserRouter,  Route, Routes } from 'react-router-dom'
import Loader from "./components/Loader/Loader";
import { ProductPage } from './pages/ProductPage';
import {AddToCartModal, ContactsModal, ProductSettingsModal, RemoveFromCartModal } from './components/Modal'
import { Cart } from './components/Cart';

render(
  <Provider store={Store}>
    <Loader />
    <ContactsModal />
    <AddToCartModal />
    <ProductSettingsModal />
    <RemoveFromCartModal/>
    <Cart/>
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
