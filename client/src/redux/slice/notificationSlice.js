import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: true,
  isSubLoading: false,
  notifications: [],
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    notificationPending: state => {
      state.isLoading = true;
    },
    notificationSuccess: (state, {payload}) => {
      state.isLoading = false;
      state.notifications = payload.res.notifications;
    },

    notificationLoadMorePending: state => {
      state.isSubLoading = true;
    },
    notificationLoadMoreSuccess: (state, {payload}) => {
      state.isSubLoading = false;
      state.notifications = state.notifications.concat(
        payload.res.notifications,
      );
    },
  },
});

export const {
  notificationSuccess,
  notificationPending,
  notificationLoadMorePending,
  notificationLoadMoreSuccess,
} = notificationSlice.actions;
export default notificationSlice.reducer;
