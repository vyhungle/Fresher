import {all, call, put, takeLatest} from 'redux-saga/effects';
import {getAccessCart, setAccessCart} from '../../utils/asyncStore';
import {
  addToCartPending,
  cartSuccess,
  clearItemCartPending,
  removeToCartPending,
  updateCart,
} from '../slice/cartSlice';

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

function* removeToCartSaga(action) {
  const {payload} = action;
  const cart = yield call(getAccessCart);

  const index = cart.products.findIndex(
    x => x.product.id === payload.product.id && x.unit.id === payload.unit.id,
  );
  if (cart.products[index].number === 1) {
    cart.products.splice(index, 1);
    cart.number--;
    cart.total -= payload.unit.price;
  } else {
    cart.products[index].number--;
    cart.total -= payload.unit.price;
  }
  yield call(setAccessCart, cart);
  yield put({type: updateCart.type, payload: {res: cart}});
}
function* clearItemCartSaga(action) {
  const {payload} = action;
  const cart = yield call(getAccessCart);

  const index = cart.products.findIndex(
    x => x.product.id === payload.product.id && x.unit.id === payload.unit.id,
  );

  cart.number--;
  cart.total -= cart.products[index].unit.price * cart.products[index].number;
  cart.products.splice(index, 1);
  yield call(setAccessCart, cart);
  yield put({type: updateCart.type, payload: {res: cart}});
}

function* workerCartSaga() {
  yield takeLatest(addToCartPending.type, addToCartSaga);
  yield takeLatest(removeToCartPending.type, removeToCartSaga);
  yield takeLatest(clearItemCartPending.type, clearItemCartSaga);
}

export default function* cartSaga() {
  console.log('cartSaga running');
  yield all([getCartSaga(), workerCartSaga()]);
}
