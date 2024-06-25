import React, { useEffect, useState } from 'react';
import BuyerNavbar from '../components/BuyerInterface/BuyerNavbar/BuyerNavbar';
import BuyerProductView from '../components/BuyerInterface/BuyerProductView/BuyerProductView';
import { GetContext } from '../context/ProductsProvider';

function ProductView() {
  const context = GetContext();
  const {
    allProducts,
  } = context;
  const [product, setProduct] = useState(null);
  useEffect(()=>{
    for(let product of allProducts){
      if(product._id === window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]){
        setProduct(product);
      }
    }
  }, [])
  return (
    <>
        <BuyerNavbar/>
        <BuyerProductView product={product}/>
    </>
  )
}

export default ProductView