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
    addToCartPending: state => {},
    removeToCartPending: state => {},
    clearItemCartPending: state => {},

    updateCart: (state, {payload}) => {
      state.products = payload.res.products;
      state.number = payload.res.number;
      state.total = payload.res.total;
    },

    clearCart: state => {
      state.products = [];
      state.number = 0;
      state.total = 0;
    },
  },
});

export const {
  cartPending,
  cartSuccess,
  addToCartPending,
  updateCart,
  removeToCartPending,
  clearItemCartPending,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
