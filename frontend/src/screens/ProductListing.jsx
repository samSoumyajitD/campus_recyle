import React, { useEffect, useState } from "react";
import BuyerNavbar from "../components/BuyerNavbar/BuyerNavbar";
import ProductList from "../components/ProductListing/ProductList";
import { useProducts } from "../context/ProductsProvider";
import { ChevronDown, ListFilter, Calendar, ArrowDownAZ } from "lucide-react";
import Fuse from 'fuse.js';

function ProductListing() {
  const products = useProducts();
  const [allProducts, setAllProducts] = useState([]);

  const options = {
    includeScore: true,
    keys: ["productname"],
  };

  const handleSearchOnchangeItem = (e) => {
    if(e.target.value !== ""){
      const fuse = new Fuse(products.data, options);
      const results = fuse.search(e.target.value);
      console.log("item search result: ", results);
      let searchedProducts = [];
      for(let result of results){
        searchedProducts.push(result.item);
      }
      setAllProducts(searchedProducts);
    }else{
      setAllProducts(products.data);
    }
    
  };

  useEffect(()=>{
    setAllProducts(products.data);
  }, []);

  return (
    <>
      <BuyerNavbar />
      <div className="product-search-filter">
        <div className="product-search-filter-container">
          <input
            className="product-search-filter-search-box"
            placeholder="Search product..."
            onChange={handleSearchOnchangeItem}
          />
          <div className="product-search-filter-category-filter">
            <span>All Categories</span>
            <ChevronDown color="gray" fontWeight={"20px"} />
          </div>
          <div className="product-search-filter-sortings">
            Filter <ListFilter size={20} />
            Date <Calendar size={20} />
            Alphabetical <ArrowDownAZ size={20} />
          </div>
        </div>
      </div>
      <ProductList products={allProducts} />
    </>
  );
}

export default ProductListing;
