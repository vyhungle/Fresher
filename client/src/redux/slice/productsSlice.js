import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: true,
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
      // state.listProducts = payload.products;
      const isList = state.listProducts.some(x => x.id === payload.res.id);
      console.log(isList);
      if (!isList) {
        state.listProducts.push(payload.res);
      }
      // else {
      //   const index = state.listProducts.findIndex(x => x.id === payload.id);
      //   const isProducts = state.listProducts[index].some(
      //     x => x.id === payload.products[0].id,
      //   );
      //   if (!isProducts) {
      //     state.listProducts[index].products.concat(payload.res.products);
      //   }
      // }
    },
  },
});

export const {productPending, productSuccess} = productsSlice.actions;
export default productsSlice.reducer;
