import React from "react";

import styled from "styled-components";
import FilterSection from "../components/FilterSection";
import Sort from "../components/Sort";
import ProductList from "../components/ProductList";
import { useGetProductsQuery } from "../store/productsApi";
import { useDispatch } from "react-redux";
import { storeProducts } from "../store/searchAndSortReducer";

export default function HomePage() {
  const { data= [] } = useGetProductsQuery();
  const dispatch = useDispatch();

  const products = data;

  if(products !== null) {
    dispatch(storeProducts(products));
  }


  return (
    <Wrapper>
      <div className="container grid grid-filter-column">
        {/* filter section */}
        <div>
          <FilterSection />
        </div>

        {/* product list */}
        <section className="product-view--sort">
          <div className="sort-filter">
            <Sort />
          </div>

          <div className="product-list">
            <ProductList products={products} />
          </div>
        </section>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1.2fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;
