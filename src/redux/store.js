import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favoriteSlice.js";
import cartReducer from "./cartSlice.js";

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    cart: cartReducer
  }
});

export default store;