import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./features/cart/cartSlice";
import productsDataReducer from "./features/productsData/productsDataSlice";
import WishlistReducer from "./features/wishlist/wishlistSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
      productsData: productsDataReducer,
      wishlist: WishlistReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
