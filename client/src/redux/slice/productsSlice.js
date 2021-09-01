import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: [],
  isPage: [],
  listProducts: [],
  product: {},
  selectIndex: 0,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    productPending: (state, {payload}) => {
      const index = state.loading.findIndex(x => x.id === payload.id);
      if (index === -1) {
        state.loading.push({id: payload.id, isLoading: true});
      } else {
        state.loading[index].isLoading = true;
      }
    },
    productSuccess: (state, {payload}) => {
      const indexLoading = state.loading.findIndex(
        x => x.id === payload.res.id,
      );
      state.loading[indexLoading].isLoading = false;
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

    productDetail: (state, {payload}) => {
      const index = state.listProducts.findIndex(
        x => x.id === payload.categoryId,
      );
      state.product = state.listProducts[index].products.find(
        x => x.id === payload.productId,
      );
    },

    changeSelectIndex: (state, {payload}) => {
      state.selectIndex = payload.index;
    },
  },
});

export const {
  productPending,
  productSuccess,
  pagePending,
  pageSuccess,
  productDetail,
  changeSelectIndex,
} = productsSlice.actions;
export default productsSlice.reducer;
