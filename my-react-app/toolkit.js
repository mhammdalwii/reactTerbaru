import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const addToCart = createAction("ADD_TO_CART");

const login = createAction("SESSION_LOGIN");

const loginReducer = createReducer({ status: false }, (builder) => {
  builder.addCase(login, (state) => {
    state.status = true;
  });
});

const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
  });
});

const store = configureStore({
  reducer: {
    login: loginReducer,
    cart: cartReducer,
  },
});

console.log("oncreate store", store.getState());

store.subscribe(() => {
  console.log("onchange store", store.getState());
});

store.dispatch(addToCart({ id: 1, qty: 20 }));
store.dispatch(addToCart({ id: 2, qty: 10 }));
store.dispatch(login());
