import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ProductContext = createContext(null);

export const GetContext = () => {
  return useContext(ProductContext);
};

export const ProductProvider = (props) => {
  const [allProducts, setAllProducts] = useState([]);

  const getAllProducts = async() => {
    try {
      const response = await axios.post('https://nitaspace.onrender.com/api/v1/product/getallproduct', {
        headers: { Authorization: `Bearer ${localStorage.getItem('campusrecycletoken')}` }
      });
      // console.log(response.data.data);
      if(response.data.success){
        setAllProducts(response.data.data);
      }else{
        console.log("Invalid Credentials");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getAllProducts();
  }, []);

  return (
    <ProductContext.Provider value={{allProducts, setAllProducts}}>
      {props.children}
    </ProductContext.Provider>
  );
};
