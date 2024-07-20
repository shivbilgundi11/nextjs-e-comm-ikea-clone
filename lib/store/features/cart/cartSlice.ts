import { createSlice } from '@reduxjs/toolkit';

interface CartItem {
  productId: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add To Cart...
    addToCart: (state, action) => {
      const { productId, quantity } = action.payload;

      const existingItem = state.items.find(
        (item) => productId === item.productId,
      );

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ productId, quantity });
      }
    },

    // Remove From Cart...
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.productId !== action.payload,
      );
    },

    // Update Product Quantity...
    updateProdQuantity: (state, action) => {
      const { productId } = action.payload;

      const existingItem = state.items.find(
        (item) => item.productId === productId,
      );

      if (existingItem) {
        existingItem.quantity++;
      }
    },

    // Clear/Empty Cart Items...
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateProdQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
