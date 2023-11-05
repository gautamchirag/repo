import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  product: [],
  selectedItem: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.product = action.payload;
    },

    // add to carts ke lye h
    addSelectedItem: (state, action) => {
      state.selectedItem.push(action.payload);
    },
    removeSelectedItem: (state, action) => {
      const indexToRemove = state.selectedItem.findIndex(
        (item) => item.id === action.payload.id
      );
      if (indexToRemove !== -1) {
        state.selectedItem.splice(indexToRemove, 1);
      }
    },
  },
});

export const { addProduct, addItem, addSelectedItem, removeSelectedItem } =
  productSlice.actions;

export default productSlice.reducer;
