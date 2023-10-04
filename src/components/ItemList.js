import React from "react";
// import ProductList from "../products/dummyProducts.json";
import Products from "../products/dummyProducts2.json";
import ItemCard from "./ItemCard";

export default function ItemList() {
  return Products.map((product) => {
    return (
      <ItemCard
        name={product.name}
        imageUrl={product.imageUrl}
        description={product.description}
        price={product.price}
      />
    );
  });
}
