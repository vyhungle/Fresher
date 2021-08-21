import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: true,
  locationName: '',
  localityInfo: [],
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    locationPending: state => {
      state.isLoading = true;
    },
    locationSuccess: (state, {payload}) => {
      state.isLoading = false;
      state.locationName = payload.res.locationName;
      state.localityInfo = payload.res.localityInfo;
    },
  },
});

export const {locationPending, locationSuccess} = locationSlice.actions;
export default locationSlice.reducer;
