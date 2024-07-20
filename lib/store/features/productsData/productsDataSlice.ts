import { createSlice } from '@reduxjs/toolkit';

import { ProductDetailType } from '@/lib/types';

interface InitialState {
  data: ProductDetailType[];
  error: string | null;
}

const initialState: InitialState = {
  data: [],
  error: null,
};

const productsDataSlice = createSlice({
  name: 'productsData',
  initialState,
  reducers: {
    // Actio To Set Fetched Data To Global State(Store)...
    storeFetchedData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { storeFetchedData } = productsDataSlice.actions;
export default productsDataSlice.reducer;
