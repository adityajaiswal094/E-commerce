import React from "react";

import { Icon } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { sortOrderValue, viewGrid, viewList } from "../store/searchAndSortReducer";

export default function Sort({ totalProducts }) {
  const { gridView, filter_products } = useSelector((state) => state?.productSearchSort);
  const dispatch = useDispatch();

  return (
    <Wrapper className="sort-section">
      <div className="sorting-list--grid">
        <button
          className={gridView === true ? "active sort-btn" : "sort-btn"}
          onClick={() => {
            dispatch(viewGrid());
          }}
        >
          <Icon className="icon">grid_view</Icon>
        </button>
        <button
          className={gridView === false ? "active sort-btn" : "sort-btn"}
          onClick={() => {
            dispatch(viewList());
          }}
        >
          <Icon className="icon">view_list</Icon>
        </button>
      </div>

      <div className="product-data">
        <p>{`${filter_products.length} Products Available`}</p>
      </div>

      <div className="sort-selection">
        <form action="#">
          <label htmlFor="sort" />
          <select
            name="sort"
            id="sort"
            className="sort-selection--style"
            onClick={(event) => {
                let userSortValue = event.target.value;
              dispatch(sortOrderValue(userSortValue));
            }}
          >
            <option value="lowest">Price(lowest)</option>
            <option value="highest">Price(highest)</option>
            <option value="a-z">Price(a-z)</option>
            <option value="z-a">Price(z-a)</option>
          </select>
        </form>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;

  .sorting-list--grid {
    display: flex;
    gap: 2rem;

    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }

  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;

    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }
`;
