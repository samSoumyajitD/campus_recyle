import React from 'react';
import './ProductList.css';
import ProductCard from './ProductCards/ProductCard';

function ProductList() {
  return (
    <div className='product-list'>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
    </div>
  )
}

export default ProductList