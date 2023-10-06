import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../helper/helper";
import { Button } from "./Button";

export default function ListSingleProduct({ product }) {
  const {
    id = 0,
    name = "",
    imageUrl = "",
    price = 0,
    // category = "",
  } = product;



  return (
    <div className="card grid grid-two-column">
      <figure>
        <img src={imageUrl} alt={name} />
      </figure>

      <div className="card-data">
        <div className="card-data-flex">
          <h3>{name}</h3>
          <p className="card-data--price">{<FormatPrice price={price} />}</p>
          <p className="card-data--description">
            {product.description.slice(0, 90)}...
          </p>

          <NavLink to={`/singleproduct/${id}`} className="button-main">
            <Button className="button">Read More</Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
