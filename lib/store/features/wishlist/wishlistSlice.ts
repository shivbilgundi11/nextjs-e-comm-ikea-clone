import { createSlice } from "@reduxjs/toolkit";

import { ProductDetailType, SingleProductType } from "@/lib/types";

interface WishlistProduct {
  podData: ProductDetailType | SingleProductType;
}

interface Wishlist {
  wishlists: WishlistProduct[];
}

const initialState: Wishlist = {
  wishlists: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    // Add To Cart...
    addToWishlist: (state, action) => {
      const { itemInfo } = action.payload;

      const existingItem = state.wishlists.find(
        (item) => itemInfo.id === item.podData.id,
      );

      if (existingItem) {
        state.wishlists = state.wishlists.filter(
          (wishlistItem) => wishlistItem.podData.id !== itemInfo.id,
        );
      } else {
        state.wishlists.push({ podData: itemInfo });
      }
    },

    // New action to set the favourites items from localStorage
    setFavs: (state, action) => {
      state.wishlists = action.payload;
    },
  },
});

export const { addToWishlist, setFavs } = wishlistSlice.actions;
export default wishlistSlice.reducer;
