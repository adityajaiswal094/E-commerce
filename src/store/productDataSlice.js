import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    storeProducts: (state, action) => {
      switch (action.type) {
        case "SET_LOADING":
          return {
            ...state,
            isLoading: true,
          };

        case "PRODUCTS_DATA":
          console.log("action.payload: ", action.payload);
          return {
            ...state,
            isLoading: false,
            products: action.payload,
          };

        case "DATA_FETCH_ERROR":
          return {
            ...state,
            isError: true,
            isLoading: false,
          };

        default:
          return { ...state };
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { storeProducts } = productsSlice.actions;

export default productsSlice.reducer;
