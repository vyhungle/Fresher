import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: true,
  categories: [],
};

const CategoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    categoriesPending: state => {
      state.isLoading = true;
    },
    categoriesSuccess: (state, {payload}) => {
      state.isLoading = false;
      state.categories = payload.categories;
    },
  },
});

export const {categoriesPending, categoriesSuccess} = CategoriesSlice.actions;
export default CategoriesSlice.reducer;
