import React from "react";
import { Icon } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ProductColors from "./ProductColors";
import { incrementCount, decrementCount } from "../store/productCountSlice";
import { Button } from "../components/Button";
import { NavLink } from "react-router-dom";

export default function AddToCart({ product }) {
  const { /* id, */ colors, stock } = product;

  const productCount = useSelector((state) => state.productCount.value);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div className="colors">
        {/* colors */}
        <ProductColors colors={colors} />

        {/* add to cart count */}
        <div className="amount-toggle">
          <button onClick={() => dispatch(decrementCount())}>
            <Icon>remove</Icon>
          </button>
          <div className="amount-style">{productCount}</div>
          <button
            onClick={() => {
              if (productCount < stock) {
                dispatch(incrementCount());
              }
            }}
          >
            <Icon>add</Icon>
          </button>
        </div>

        {/* add to cart button */}
        <NavLink to="/cart">
          <Button onClick={() => {}}>Add to cart</Button>
        </NavLink>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .buttonStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 1;
    cursor: pointer;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.button};
    }
  }
`;
