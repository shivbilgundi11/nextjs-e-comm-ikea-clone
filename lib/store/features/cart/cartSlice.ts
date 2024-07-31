import { createSlice } from "@reduxjs/toolkit";

import { ProductDetailType, SingleProductType } from "@/lib/types";

interface CartItem {
  prodData: ProductDetailType | SingleProductType;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add To Cart...
    addToCart: (state, action) => {
      const { prodData, quantity } = action.payload;

      const existingItem = state.items.find(
        (item) => prodData.id === item.prodData.id,
      );

      if (existingItem) {
        existingItem.quantity = Math.min(existingItem.quantity + quantity, 8);
      } else {
        state.items.push({ prodData, quantity });
      }
    },

    // Add To Bag...
    addToBag: (state, action) => {
      const { prodData, quantity } = action.payload;

      const existingItem = state.items.find(
        (item) => prodData.id === item.prodData.id,
      );

      if (!existingItem) {
        state.items.push({ prodData, quantity });
      }
    },

    // Remove From Cart...
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.prodData.id !== action.payload,
      );
    },

    // Increase Product Quantity...
    increaseProdQuantity: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.prodData.id === action.payload,
      );

      if (existingItem) {
        existingItem.quantity = Math.min(existingItem.quantity + 1, 8);
      }
    },

    // Decrease Product Quantity...
    decreaseProdQuantity: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.prodData.id === action.payload,
      );

      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter(
            (item) => item.prodData.id !== action.payload,
          );
        } else {
          existingItem.quantity--;
        }
      }
    },

    // Clear/Empty Cart Items...
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  addToBag,
  removeFromCart,
  increaseProdQuantity,
  decreaseProdQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
