import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("favorites") || "[]")
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const product = action.payload;
      
      if (!product || !product.id) return;

      const exists = state.items.find(
        item => item.id === product.id
      );

      if (exists) {
        state.items = state.items.filter(
          item => item.id !== product.id
        );
      } else {
        state.items.push(product);
      }

      localStorage.setItem("favorites", JSON.stringify(state.items));
    }
  }
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
