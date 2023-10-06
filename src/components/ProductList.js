import React, { useEffect } from "react";
import ProductGridView from "./ProductGridView";
import ProductListView from "./ProductListView";
import { useDispatch, useSelector } from "react-redux";
import { showFilterProducts, sortOrder } from "../store/searchAndSortReducer";

export default function ProductList({ products }) {
  const { gridView, sorting_value, filter_products, filters } = useSelector(
    (state) => state?.productSearchSort
  );

  // console.log("filter_products: ", filter_products);
  console.log("text: ", filters.text);

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(showFilterProducts());
    dispatch(sortOrder(filter_products));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products, sorting_value, filters]);

  if (gridView === true) {
    return <ProductGridView products={filter_products} />;
  } else {
    return <ProductListView products={filter_products} />;
  }
}
