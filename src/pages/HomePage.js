import React from "react";

import { useGetProductsQuery } from "../store/productsApi";
import ItemCard from "../components/ItemCard";
import PageNotFound from "./PageNotFound";
import { NavLink } from "react-router-dom";

export default function HomePage() {
  const { data, isLoading, isSuccess, isError, isFetching } =
    useGetProductsQuery();

  return (
    <>
      {/* <Box sx={boxStyle}>
        <ItemList />
      </Box> */}
      {isLoading && <h2>Loading...</h2>}
      {isFetching && <h2>Fetching...</h2>}
      {isError && <PageNotFound />}
      {isSuccess && (
        <div>
          {data?.map((product) => {
            return (
              <NavLink to={`/singleproduct/${product.id}`}>
                <ItemCard
                  key={product.id}
                  name={product.name}
                  imageUrl={product.imageUrl}
                  description={product.description}
                  price={product.price}
                />
              </NavLink>
            );
          })}
        </div>
      )}
    </>
  );
}

// const boxStyle = {
//   width: "100vw",
//   height: "100vh",
//   backgroundColor: "white",
// };
