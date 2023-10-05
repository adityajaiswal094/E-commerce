import { Icon } from "@mui/material";
import React from "react";
import styled from "styled-components";

export default function Star({ stars, reviews }) {
  const rating = Array.from({ length: 5 }, (ele, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <Icon className="icon">star</Icon>
        ) : stars >= number ? (
          <Icon className="icon">star_half</Icon>
        ) : (
          <Icon className="icon" baseClassName="material-symbols-outlined">star</Icon>
        )}
      </span>
    );
  });
  return (
    <Wrapper>
      <div className="icon-style">
        {rating}
        <p>({reviews} customer reviews)</p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .icon-style {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: flex-start;

    .icon {
      font-size: 2rem;
      color: orange;
    }

    .empty-icon {
      font-size: 2.6rem;
    }
    p {
      margin: 0;
      padding-left: 1.2rem;
    }
  }
`;
