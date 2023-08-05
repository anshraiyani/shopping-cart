import { Rating } from "@mui/material";
import React from "react";

function ProductCard({ item }) {
  return (
    <div className="card-container">
      <div className="img-container">
        <img className="product-image" src={item.image} alt="" />
      </div>
        <span className="product-info">{item.title}</span>
      <div className="info-container">
        <span className="product-price">$ {item.price}</span>
        <div className="rating-container">
          <Rating value={item.rating.rate} precision={0.1} readOnly />
          <span>{item.rating.count}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
