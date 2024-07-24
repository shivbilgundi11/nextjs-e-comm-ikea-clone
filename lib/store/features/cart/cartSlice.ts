import { createSlice } from '@reduxjs/toolkit';

interface CartItem {
  id: string;
  quantity: number;
  img: string;
  price: number;
  pName: string;
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
      const { id, img, price, pName, quantity } = action.payload;

      const existingItem = state.items.find((item) => id === item.id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ id, img, price, pName, quantity });
      }
    },

    // Remove From Cart...
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    // Update Product Quantity...
    updateProdQuantity: (state, action) => {
      const { id } = action.payload;

      const existingItem = state.items.find((item) => item.id === id);

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
