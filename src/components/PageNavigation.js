import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function PageNavigation({ title }) {
  let goBack = useNavigate();

  return (
    <Wrapper>
      <NavLink onClick={() => goBack(-1)}>Home</NavLink>/{title}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 2.2rem;
  padding-left: 1.2rem;

  a {
    font-size: 2.2rem;
  }
`;
