import { Icon } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";

export default function AddToCart({ product }) {
  const { id, colors, stock } = product;

  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <Wrapper>
      <div className="colors">
        <p>
          Color:
          {colors.map((color, index) => {
            return (
                <button
                  key={index}
                  style={{ backgroundColor: color }}
                  className="buttonStyle"
                  onClick={() => {
                    setSelectedColor(color);
                  }}
                >
                  <Icon color="info">
                    {color === selectedColor ? "check" : null}
                  </Icon>
                </button>
            );
          })}
        </p>
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
    align-items: center;
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
