import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const productCountSlice = createSlice({
  name: "productCount",
  initialState,
  reducers: {
    incrementCount: (state) => {
      state.value += 1;
    },
    decrementCount: (state) => {
      if (state.value > 0) {
        state.value -= 1;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { incrementCount, decrementCount } = productCountSlice.actions;

export default productCountSlice.reducer;
