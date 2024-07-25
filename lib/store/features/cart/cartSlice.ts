import { createSlice } from '@reduxjs/toolkit';

interface CartItem {
  id: string;
  quantity: number;
  img: string;
  price: number;
  pInfo: string;
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
      const { id, img, price, pName, pInfo, quantity } = action.payload;

      const existingItem = state.items.find((item) => id === item.id);

      if (existingItem) {
        if (existingItem.quantity === 8) {
          existingItem.quantity = existingItem.quantity;
        } else {
          existingItem.quantity++;
        }
      } else {
        state.items.push({ id, img, price, pName, pInfo, quantity });
      }
    },

    // Add To Cart...
    addToBag: (state, action) => {
      const { id, img, price, pName, pInfo, quantity } = action.payload;

      const existingItem = state.items.find((item) => id === item.id);

      if (existingItem) {
        return;
      } else {
        state.items.push({ id, img, price, pName, pInfo, quantity });
      }
    },

    // Remove From Cart...
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    // Increase Product Quantity...
    increaseProdQuantity: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload,
      );

      if (existingItem) {
        if (existingItem.quantity === 8) {
          existingItem.quantity = existingItem.quantity;
        } else {
          existingItem.quantity++;
        }
      }
    },

    // Decrease Product Quantity...
    decreaseProdQuantity: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload,
      );

      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter(
            (item) => item.id !== action.payload,
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
