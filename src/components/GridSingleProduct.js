import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../helper/helper";

export default function GridSingleProduct({product}) {
  const { id = 0, name = "", imageUrl = "", price = 0, category = "" } = product;
  return (
    <NavLink to={`/singleproduct/${id}`}>
      <div className="card">
        <figure>
          <img src={imageUrl} alt={name} />
          <figcaption className="caption">{category}</figcaption>
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3>{name}</h3>
            <p className="card-data--price">{<FormatPrice price={price} />}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
}
