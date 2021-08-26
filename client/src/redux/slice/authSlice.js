import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isAuth: false,
  phoneNumber: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authPending: state => {
      state.isLoading = true;
    },

    authSuccess: (state, {payload}) => {
      state.isLoading = false;
      state.isAuth = true;
      state.phoneNumber = payload.phoneNumber;
    },

    getAuth: (state, {payload}) => {
      state.isAuth = true;
      state.phoneNumber = payload.phoneNumber;
    },

    logoutAuth: state => {
      console.log('logout');
      state.isAuth = false;
      state.phoneNumber = '';
    },
  },
});

export const {authPending, authSuccess, getAuth, logoutAuth} =
  authSlice.actions;
export default authSlice.reducer;
