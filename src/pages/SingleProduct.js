import React from "react";
import { useGetSingleProductQuery } from "../store/productsApi";
import PageNotFound from "./PageNotFound";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import PageNavigation from "../components/PageNavigation";
import { Container } from "../components/Container";
import FormatPrice from "../helper/FormatPrice";
import Star from "../components/Star";
import AddToCart from "./AddToCart";

export default function SingleProduct() {
  const params = useParams();
  const {
    data = {},
    isLoading,
    isError,
  } = useGetSingleProductQuery(params?.id);

  const {
    name = "",
    imageUrl = "",
    description = "",
    price = 0,
    // category = "",
    stock = 0,
    reviews = "",
    stars = 0,
    company= "",
  } = data;

  if (isLoading) {
    return <div className="page_loading">Loading...</div>;
  }

  if (isError) {
    return <PageNotFound />;
  }

  return (
    <Wrapper>
      <PageNavigation title={name} />

      <Container className="container">
        <div className="grid grid-two-column">
          {/* product image */}
          <div className="product-image">
            <img src={imageUrl} alt="product-pic" />
          </div>

          {/* product data */}
          <div className="product-data">
            <h2>{name}</h2>

            <Star stars={stars} reviews={reviews} />

            <p className="product-data-price">
              MRP: <FormatPrice price={price} />
            </p>

            <p className="product-description">{description}</p>

            <div className="product-data-info">
              <p>
                Available:
                <span>{stock > 0 ? " In stock" : " Out of stock"}</span>
              </p>
              <p>
                ID:
                <span> {params.id}</span>
              </p>
              <p>
                Brand:
                <span> {company}</span>
              </p>
            </div>

            {/* horizontal line */}
            <hr />
            
            {/* add to cart */}
            <AddToCart product={data} />
          </div>
        </div>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .container {
    padding: 4rem 0;
  }

  .product-image {
    display: grid;
    place-items: center;
    img {
      max-width: 80%;
      height: auto;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }

  .product_images {
    display: flex;
    align-items: center;
  }

  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.5rem;

    .product-data-price {
      color: ${({ theme }) => theme.colors.button};
      font-weight: bold;
    }

    .product-description {
      font-weight: 400;
    }

    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;
      color: ${({ theme }) => theme.colors.bg};

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .page_loading {
    font-size: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;
