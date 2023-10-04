import { configureStore } from '@reduxjs/toolkit';
import productReducer from "./productDataSlice";
import { productsApi } from './productsApi';

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath] : productsApi.reducer,
    products: productReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(productsApi.middleware)
});
