import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../components/Button";

export default function PageNotFound() {
  return (
    <ErrorPage>
      <div className="container">
        <div>
          <h2>404</h2>

          <h3>Uh Oh! You're lost.</h3>

          <p>
            The page you are looking for doesn't exist. Click the button below
            to get redirected to Home.
          </p>

          <NavLink to="/">
            <Button variant="outlined">Go back to Home</Button>
          </NavLink>
        </div>
      </div>
    </ErrorPage>
  );
}

const ErrorPage = styled.section`
  .container {
    padding: 10rem;
    text-align: center;

    h2 {
      font-size: 10rem;
    }

    h3 {
      font-size: 4.2rem;
    }

    p {
      padding: 2rem 0;
    }
  }
`;
