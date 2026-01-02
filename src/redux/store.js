import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favoriteSlice.js";

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer
  }
});

export default store;