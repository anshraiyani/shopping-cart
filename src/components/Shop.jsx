import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function Shop() {
  const [data, setData] = useState(null);

  const getData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const productData = await response.json();
      setData(productData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="products-container">
      {data ? (
        data.map((item) => <ProductCard item={item} />)
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default Shop;
