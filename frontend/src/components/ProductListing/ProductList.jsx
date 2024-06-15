import React from "react";
import "./ProductList.css";
import ProductCard from "./ProductCards/ProductCard";

function ProductList(props) {
  return (
    <div className="product-list">
      <div className="row">
        {props.products.map((product) => {
          return <ProductCard product={product} />;
        })}
      </div>
    </div>
  );
}

export default ProductList;
