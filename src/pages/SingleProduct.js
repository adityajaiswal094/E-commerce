import React from "react";
import { useGetSingleProductQuery } from "../store/productsApi";
import ItemCard from "../components/ItemCard";
import PageNotFound from "./PageNotFound";
import { useParams } from "react-router-dom";

export default function SingleProduct() {
  const params = useParams();
  console.log("id: ", params);
  const { data = {}, isLoading, isSuccess, isError, isFetching } =
    useGetSingleProductQuery(params?.id);

  const {
    name = "",
    imageUrl = "",
    description = "",
    price = 0,
    category = "",
    stock = 0,
    reviews = "",
    stars = 0,
  } = data;

  return (
    <>
      {/* <h2>{JSON.stringify(data, null, 2)}</h2> */}

      {isLoading && <h2>Loading...</h2>}
      {isFetching && <h2>Fetching...</h2>}
      {isError && <PageNotFound />}
      {isSuccess && (
        <div>
          <ItemCard
            key={params.id}
            name={name}
            imageUrl={imageUrl}
            description={description}
            price={price}
          />
          <div>{category}</div>
          <div>{stock}</div>
          <div>{reviews}</div>
          <div>{stars}</div>
        </div>
      )}
    </>
  );
}
