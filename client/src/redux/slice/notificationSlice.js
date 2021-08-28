import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: true,
  isSubLoading: false,
  notifications: [],
  notificationNumber: 0,
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

      for (let a of state.notifications) {
        if (a.read === false) {
          state.notificationNumber += 1;
        }
      }
    },

    notificationLoadMorePending: state => {
      state.isSubLoading = true;
    },
    notificationLoadMoreSuccess: (state, {payload}) => {
      state.isSubLoading = false;
      state.notifications = state.notifications.concat(
        payload.res.notifications,
      );
      for (let a of state.notifications) {
        if (a.read === false) {
          state.notificationNumber += 1;
        }
      }
    },

    addNotification: (state, {payload}) => {
      state.notifications.unshift(payload.res);
      state.notificationNumber += 1;
    },

    readNotificationPending: state => {},
    readNotificationSuccess: (state, {payload}) => {
      const listIndex = [];
      for (let i = 0; i < state.notifications.length; i++) {
        if (
          state.notifications[i].orderId === payload.orderId &&
          state.notifications[i].read === false
        ) {
          listIndex.push(i);
        }
      }
      for (let item of listIndex) {
        state.notifications[item].read = true;
      }
      state.notificationNumber -= listIndex.length;
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
