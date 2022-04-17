import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./reducers";
import thunk from "redux-thunk";
import { InitialCartState } from "./InitialCartState";

const CART = "cart"

function restoredCart() {
    const cart = localStorage.getItem(CART)
    return cart ? JSON.parse(cart) : InitialCartState
}

export const Store = createStore(rootReducer, {cart: restoredCart()}, applyMiddleware(thunk))

Store.subscribe(() => {
    localStorage.setItem(CART, JSON.stringify(Store.getState().cart))
})
