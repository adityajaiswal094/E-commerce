import { configureStore } from '@reduxjs/toolkit';
import productCountReducer from "./productCountSlice";
import { productsApi } from './productsApi';
import sortReducer from './searchAndSortReducer';

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    productCount: productCountReducer,
    productSearchSort: sortReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(productsApi.middleware)
});
