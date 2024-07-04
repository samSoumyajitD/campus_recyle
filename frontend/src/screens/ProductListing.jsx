import React, { useEffect, useState } from "react";
import BuyerNavbar from "../components/BuyerInterface/BuyerNavbar/BuyerNavbar";
import ProductList from "../components/BuyerInterface/ProductListing/ProductList";
import { GetContext } from "../context/ProductsProvider";
import {
  ChevronDown,
  ListFilter,
  Calendar,
  ArrowDownAZ,
  ArrowUpAZ
} from "lucide-react";
import Fuse from "fuse.js";
import { useNavigate } from "react-router-dom";

function ProductListing() {
  const context = GetContext();
  const { allProducts, setAllProducts } = context;

  const [AlphabeticalsortingOrder, setAlphabeticalSortingOrder] =
    useState("Alphabeticalasc");
  const [DatesortingOrder, setDateSortingOrder] = useState("Dateasc");
  const [activeDateSort, setDateSortActive] = useState(false);
  const [activeAplhabeticalSort, setAplhabeticalSortActive] = useState(false);
  const [priceFilterValue, setPriceFilterValue] = useState(0);
  const [isFilter, setIsFilter] = useState(false);

  const options = {
    includeScore: true,
    keys: ["productname"],
  };

  const handleSearchOnchangeItem = (e) => {
    if (e.target.value !== "") {
      const fuse = new Fuse(allProducts, options);
      const results = fuse.search(e.target.value);
      console.log("item search result: ", results);
      let searchedProducts = [];
      for (let result of results) {
        searchedProducts.push(result.item);
      }
      setAllProducts(searchedProducts);
    } else {
      setAllProducts(allProducts);
    }
  };

  const [isCategoryDropdown, setIsCategoryDropdown] = useState(false);

  const toggleCategoryDropDown = () => {
    if (isCategoryDropdown) {
      setIsCategoryDropdown(false);
    } else {
      setIsCategoryDropdown(true);
    }
  };

  const [categoryFilterText, setCategoryFilterText] =
    useState("All Categories");
  const [categoryFilter, setCategoryFilter] = useState("");
  const handleApplyCategoryFilter = (category, categoryText) => {
    setCategoryFilterText(categoryText);
    setCategoryFilter(category);
    setIsCategoryDropdown(false);
  };

  const ToogleSortAlphabetically = () => {
    const sortedData = [...allProducts].sort((a, b) => {
      return AlphabeticalsortingOrder === "Alphabeticalasc"
        ? a.productname.localeCompare(b.productname)
        : b.productname.localeCompare(a.productname);
    });
    setAplhabeticalSortActive(true);
    setDateSortActive(false);
    setAlphabeticalSortingOrder(
      AlphabeticalsortingOrder === "Alphabeticalasc"
        ? "Alphabeticaldesc"
        : "Alphabeticalasc"
    );
    setAllProducts(sortedData);
  };

  const ToogleSortDatewise = () => {
    const sortedData = [...allProducts].sort((a, b) => {
      const dateA = new Date(a.createdat);
      const dateB = new Date(b.createdat);
      return DatesortingOrder === "Dateasc" ? dateA - dateB : dateB - dateA;
    });
    setDateSortActive(true);
    setAplhabeticalSortActive(false);
    setDateSortingOrder(
      DatesortingOrder === "Dateasc" ? "Datedesc" : "Dateasc"
    );
    setAllProducts(sortedData);
  };

  const navigate = useNavigate();

  useEffect(() => {
    console.log(allProducts);

    if(!localStorage.getItem('campusrecycletoken')){
      navigate('/');
    }
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
            <div className="clickable" onClick={toggleCategoryDropDown}>
              <span>{categoryFilterText}</span>
              <ChevronDown
                color="gray"
                fontWeight={"20px"}
                style={{ rotate: isCategoryDropdown ? "180deg" : "0deg" }}
              />
            </div>
            {isCategoryDropdown && (
              <div className="categories">
                <li
                  onClick={() =>
                    handleApplyCategoryFilter("inventory", "Inventory")
                  }
                >
                  Inventory
                </li>
                <li
                  onClick={() =>
                    handleApplyCategoryFilter("accessories", "Accessories")
                  }
                >
                  Accessories
                </li>
                <li
                  onClick={() =>
                    handleApplyCategoryFilter("", "All Categories")
                  }
                >
                  All Categories
                </li>
              </div>
            )}
          </div>
          <div className="product-search-filter-sortings">
            <span data-bs-toggle="modal" data-bs-target="#filter">
              Filter <ListFilter size={20} />
            </span>
            <span onClick={ToogleSortDatewise}>
              Date <Calendar size={20} />
            </span>
            <span onClick={ToogleSortAlphabetically}>
              Alphabetical{" "}
              {AlphabeticalsortingOrder === "Alphabeticalasc" ? (
                <ArrowDownAZ size={20} />
              ) : (
                <ArrowUpAZ size={20} />
              )}
            </span>
          </div>
        </div>
        <div
          class="modal fade"
          id="filter"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Filter
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div className="filter-element">
                  <label htmlFor="priceRange">
                    Price range: 0 - {priceFilterValue}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="5000"
                    value={priceFilterValue}
                    onChange={(e) => setPriceFilterValue(e.target.value)}
                    class="slider"
                    id="priceRange"
                  />
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  onClick={()=>{
                    setPriceFilterValue(0);
                  }}
                >
                  Close
                </button>
                {isFilter && <button onClick={()=>setIsFilter(false)}>Clear Filter</button>}
                <button onClick={()=>setIsFilter(true)}>
                  Apply Filter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductList
        products={allProducts}
        categoryFilter={categoryFilter}
        isFilter={isFilter}
        priceFilterValue={priceFilterValue}
      />
    </>
  );
}

export default ProductListing;
