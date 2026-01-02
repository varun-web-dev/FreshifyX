import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("cart")) || []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;

      const existing = state.items.find(item => item.id === product.id);

      if (existing) {
        existing.qty += 1;
      } else {
        state.items.push({ ...product, qty: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    decreaseQty: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item.qty > 1) item.qty -= 1;
      localStorage.setItem("cart", JSON.stringify(state.items));
    }
  }
});

export const { addToCart, removeFromCart, decreaseQty } = cartSlice.actions;
export default cartSlice.reducer;
