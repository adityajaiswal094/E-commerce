import React from "react";
import { useGetProductsQuery } from "../store/productsApi";

export default function Test() {
  const product = useGetProductsQuery();
  
  return <pre>{JSON.stringify(product, null, 2)}</pre>;
  
}
