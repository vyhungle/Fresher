import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import categoriesReducer from './slice/categoriesSlice';
import productsReducer from './slice/productsSlice';
import locationReducer from './slice/locationSlice';
import cartReducer from './slice/cartSlice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    location: locationReducer,
    cart: cartReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
