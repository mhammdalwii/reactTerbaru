import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

console.log("Store created:", store.getState());

store.subscribe(() => {
  console.log("Store updated:", store.getState());
});

export default store;
