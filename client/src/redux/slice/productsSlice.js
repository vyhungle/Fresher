import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: true,
  isPage: [],
  listProducts: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    productPending: state => {
      state.isLoading = true;
    },
    productSuccess: (state, {payload}) => {
      state.isLoading = false;
      const isList = state.listProducts.some(x => x.id === payload.res.id);
      if (!isList) {
        state.listProducts.push(payload.res);
      }
    },

    pagePending: (state, {payload}) => {
      const index = state.isPage.findIndex(x => x.id === payload.id);
      if (index === -1) {
        state.isPage.push({id: payload.id, isLoading: true});
      } else {
        state.isPage[index].isLoading = true;
      }
    },
    pageSuccess: (state, {payload}) => {
      const indexPage = state.isPage.findIndex(x => x.id === payload.res.id);
      state.isPage[indexPage].isLoading = false;

      const index = state.listProducts.findIndex(x => x.id === payload.res.id);
      if (index >= 0) {
        if (state.listProducts[index].page !== payload.res.page) {
          state.listProducts[index].products = state.listProducts[
            index
          ].products.concat(payload.res.products);
          state.listProducts[index].page = payload.res.page;
        }
      }
    },
  },
});

export const {productPending, productSuccess, pagePending, pageSuccess} =
  productsSlice.actions;
export default productsSlice.reducer;
