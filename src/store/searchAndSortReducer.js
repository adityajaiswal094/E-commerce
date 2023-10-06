import { createSlice } from "@reduxjs/toolkit";
import { sortByName, sortByPrice } from "../helper/helper";

const initialState = {
  gridView: true,
  sorting_value: "lowest",
  filter_products: [],
  all_products: [],
  filters: {
    text: "",
  },
};

const searchAndsortReducer = createSlice({
  name: "productSort",
  initialState,
  reducers: {
    viewGrid: (state, action) => {
      return {
        ...state,
        gridView: true,
      };
    },

    viewList: (state, action) => {
      return {
        ...state,
        gridView: false,
      };
    },

    sortOrderValue: (state, action) => {
      return {
        ...state,
        sorting_value: action.payload,
      };
    },

    storeProducts: (state, action) => {
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
      };
    },

    sortOrder: (state, action) => {
      let tempData = [...action.payload];
      let newSortedData;

      if (state.sorting_value === "a-z") {
        newSortedData = sortByName("a-z", tempData);
        return {
          ...state,
          filter_products: newSortedData,
        };
      } else if (state.sorting_value === "z-a") {
        newSortedData = sortByName("z-a", tempData);

        return {
          ...state,
          filter_products: newSortedData,
        };
      } else if (state.sorting_value === "lowest") {
        newSortedData = sortByPrice("lowest", tempData);

        return {
          ...state,
          filter_products: newSortedData,
        };
      } else if (state.sorting_value === "highest") {
        newSortedData = sortByPrice("highest", tempData);

        return {
          ...state,
          filter_products: newSortedData,
        };
      }
    },

    filterSearch: (state, action) => {
      const { name, value } = action.payload;

      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };
    },

    showFilterProducts: (state) => {
      const {text} = state.filters;

      let tempFilteredData = [...state.all_products];
    //   console.log("state.all_products: ", state.all_products);
    //   console.log("state.filter_products: ", state.filter_products);
    //   console.log("text: ", text);


      if (text) {
        tempFilteredData = tempFilteredData.map((prod) => {
          return prod.name.toLowerCase().includes(text);
        });
      }

      return {
        ...state,
        filter_products: tempFilteredData,
      };
    },
  },
});

export const {
  viewGrid,
  viewList,
  sortOrderValue,
  sortOrder,
  storeProducts,
  filterSearch,
  showFilterProducts,
} = searchAndsortReducer.actions;

export default searchAndsortReducer.reducer;
