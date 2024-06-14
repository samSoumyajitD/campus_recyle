import React from 'react';
import ProductImg from '../../../images/product-image.jpg';
import './ProductCard.css';

function ProductCard() {
  return (
    <div className='product-card'>
        <div className="product-card-image">
            <img src={ProductImg} alt="" />
        </div>
        <div className='product-card-details'>
            <h4>Product Name</h4>
            <p>Lorem ipsum dolor sit amet</p>
            <p className='product-card-details-price'>&#8377; 300</p>
        </div>
    </div>
  )
}

export default ProductCard