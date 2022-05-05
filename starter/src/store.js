import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/cart/cartSlice';
import modalReucer from './features/modal/modal'


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReucer,
  },
});