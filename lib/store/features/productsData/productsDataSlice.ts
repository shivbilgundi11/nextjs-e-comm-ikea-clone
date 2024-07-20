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
    storeFetchedData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export default productsDataSlice.actions;
