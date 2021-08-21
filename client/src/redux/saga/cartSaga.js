import {all, call, put, takeLatest} from 'redux-saga/effects';
import {getAccessCart, setAccessCart} from '../../utils/asyncStore';
import {addToCartPending, cartSuccess, updateCart} from '../slice/cartSlice';

function* getCartSaga() {
  const cart = yield call(getAccessCart);
  if (cart !== null) {
    yield put({type: cartSuccess.type, payload: {res: cart}});
  }
}

function* addToCartSaga(action) {
  const {payload} = action;

  const cartLocal = yield call(getAccessCart);
  const cart =
    cartLocal === null
      ? {
          products: [],
          number: 0,
          total: 0,
        }
      : cartLocal;
  const index = cart.products.findIndex(
    x => x.product.id === payload.product.id && x.unit.id === payload.unit.id,
  );

  if (index === -1) {
    cart.products.push({
      product: payload.product,
      unit: payload.unit,
      number: 1,
    });
    cart.total += payload.unit.price;
    cart.number++;
  } else {
    cart.products[index].number++;
    cart.total += payload.unit.price;
  }
  yield call(setAccessCart, cart);
  yield put({type: updateCart.type, payload: {res: cart}});
}

function* workerCartSaga() {
  yield takeLatest(addToCartPending.type, addToCartSaga);
}

export default function* cartSaga() {
  console.log('cartSaga running');
  yield all([getCartSaga(), workerCartSaga()]);
}
