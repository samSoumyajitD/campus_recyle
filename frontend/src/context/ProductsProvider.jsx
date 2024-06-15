import React, { createContext, useContext } from "react";
import { products } from "../utils/JsonProvider";

const ProductContext = createContext(null);

export const useProducts = () => {
  const products = useContext(ProductContext);
  return products;
};

export const ProductProvider = (props) => {
  const allProducts = products;
  return (
    <ProductContext.Provider value={allProducts}>
      {props.children}
    </ProductContext.Provider>
  );
};
