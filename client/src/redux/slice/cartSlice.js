import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: true,
  products: [],
  number: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    cartPending: state => {
      state.isLoading = true;
    },
    cartSuccess: (state, {payload}) => {
      state.isLoading = false;
      state.products = payload.res.products;
      state.number = payload.res.number;
      state.total = payload.res.total;
    },

    addToCart: (state, {payload}) => {
      state.products = payload.res.products;
      state.number = payload.res.number;
      state.total = payload.res.total;
    },
    removeToCart: (state, {payload}) => {
      state.products = payload.res.products;
      state.number = payload.res.number;
      state.total = payload.res.total;
    },
  },
});

export const {cartPending, cartSuccess, addToCart, removeToCart} =
  cartSlice.actions;
export default cartSlice.reducer;
