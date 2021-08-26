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

    addNotification: (state, {payload}) => {
      state.notifications.unshift(payload.res);
    },

    readNotificationPending: state => {},
    readNotificationSuccess: (state, {payload}) => {
      const index = state.notifications.findIndex(x => x.id === payload.id);

      if (index !== -1) {
        console.log(state.notifications[index].read);
        state.notifications[index].read = true;
      }
    },
  },
});

export const {
  notificationSuccess,
  notificationPending,
  notificationLoadMorePending,
  notificationLoadMoreSuccess,
  addNotification,
  readNotificationPending,
  readNotificationSuccess,
} = notificationSlice.actions;
export default notificationSlice.reducer;
