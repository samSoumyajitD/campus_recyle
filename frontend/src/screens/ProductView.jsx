import React, { useEffect, useState } from 'react';
import BuyerNavbar from '../components/BuyerInterface/BuyerNavbar/BuyerNavbar';
import BuyerProductView from '../components/BuyerInterface/BuyerProductView/BuyerProductView';
import { GetContext } from '../context/ProductsProvider';
import { useNavigate } from 'react-router-dom';

function ProductView() {
  const navigate = useNavigate();

  const context = GetContext();
  const {
    allProducts,
  } = context;
  const [product, setProduct] = useState(null);
  useEffect(()=>{
    if(!localStorage.getItem('campusrecycletoken')){
      navigate('/');
    }
    
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