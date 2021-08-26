import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: true,
  isSubLoading: false,
  isOrderLoading: true,
  orders: [],
  order: {},
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    orderPending: state => {
      state.isLoading = true;
    },
    orderSuccess: (state, {payload}) => {
      state.isLoading = false;
      state.orders = payload.res.orders;
    },

    orderLoadMorePending: state => {
      state.isSubLoading = true;
    },
    orderLoadMoreSuccess: (state, {payload}) => {
      state.isSubLoading = false;
      state.orders = state.orders.concat(payload.res.orders);
    },

    addOrderPending: state => {},
    addOrderSuccess: (state, {payload}) => {
      state.orders.unshift(payload.res);
    },

    getSingleOrderPending: state => {
      state.isOrderLoading = true;
    },
    getSingleOrderSuccess: (state, {payload}) => {
      state.isOrderLoading = false;
      state.order = payload.res.order;
    },
  },
});

export const {
  orderPending,
  orderSuccess,
  orderLoadMorePending,
  orderLoadMoreSuccess,
  addOrderPending,
  addOrderSuccess,
  getSingleOrderPending,
  getSingleOrderSuccess,
} = orderSlice.actions;
export default orderSlice.reducer;
