import React from 'react';
import './ProductSearchFilter.css';
import { ChevronDown, ListFilter, Calendar, ArrowDownAZ } from 'lucide-react';

function ProductSearchFilter() {
  return (
    <div className='product-search-filter'>
        <div className='product-search-filter-container'>
          <input className='product-search-filter-search-box' placeholder='Search product...'/>
          <div className='product-search-filter-category-filter'>
            <span>All Categories</span>
            <ChevronDown color='gray' fontWeight={"20px"}/>
          </div>
          <div className='product-search-filter-sortings'>
            Filter{" "}<ListFilter size={20}/>
            Date{" "}<Calendar size={20}/>
            Alphabetical{" "}<ArrowDownAZ size={20}/>
          </div>
        </div>
    </div>
  )
}

export default ProductSearchFilter