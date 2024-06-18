import React from "react";
import "./ProductList.css";
import ProductCard from "./ProductCard";

function ProductList(props) {
  return (
    <div className="product-list">
      <div className="row">
        {props.products
        .filter((product)=>{
          return props.categoryFilter !== "" ? product.category.name === props.categoryFilter : 1;
        })
        .map((product) => {
          return <ProductCard product={product} />;
        })}
      </div>
    </div>
  );
}

export default ProductList;
