import React, { useRef, useState } from "react";
import "./AddProductFrom.css";
import Spinner from "react-bootstrap/Spinner";
import { apiConnector } from "../../../utils/Apiconnecter";
import { authroutes } from "../../../apis/apis";

function AddProductForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [addProductData, setAddProductData] = useState({
    productname: "",
    productdescription: "",
    price: "",
    status: "",
    quantity: "",
    categoryid: "",
  });
  const imagesInputRef = useRef();
  const addProductFormRef = useRef();

  const handleOnChange = (e) => {
    setAddProductData({ ...addProductData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    var formData = new FormData();

    for (var key in addProductData) {
        formData.append(key, addProductData[key]);
    }

    for (let i = 0; i < imagesInputRef.current.files.length; i++) {
      formData.append('images', imagesInputRef.current.files[i], imagesInputRef.current.files[i].name);
    }
    
    try {
      const api_header = { 
        Authorization: `Bearer ${localStorage.getItem('campusrecycletoken')}`,
        "Content-Type": "multipart/form-data"
      };
      const response = await apiConnector("POST", authroutes.ADD_PRODUCT, formData, api_header);
      console.log(response.data);
      if (response.data.success) {
        setAddProductData({
          productname: "",
          productdescription: "",
          price: "",
          status: "",
          quantity: "",
          categoryid: "",
        });
        console.log("Product added");
        addProductFormRef.current.reset();
        setIsLoading(false);
        const user = localStorage.getItem('campusrecycleuser');
        const userObj = JSON.parse(user);
        const allProductIds = userObj.products;
        allProductIds.push(response.data.data._id);
        userObj.products = allProductIds;
        localStorage.setItem('campusrecycleuser', JSON.stringify(userObj));
      }else{
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  return (
    <div className="add-product-form">
      <form onSubmit={handleSubmit} ref={addProductFormRef}>
        <div className="add-product-form-heading">
          <h3>Add New Product</h3>
        </div>
        <div className="add-product-form-body">
          <div className="form-block">
            <div className="form-segment">
              <label htmlFor="productname">Product Name</label>
              <input
                type="text"
                id="productname"
                name="productname"
                value={addProductData.productname}
                onChange={handleOnChange}
              />
            </div>
            <div className="form-segment">
              <label htmlFor="productdescription">Product Description</label>
              <input
                type="text"
                id="productdescription"
                name="productdescription"
                value={addProductData.productdescription}
                onChange={handleOnChange}
              />
            </div>
            <div className="form-segment">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                id="price"
                name="price"
                value={addProductData.price}
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className="form-block">
            <div className="form-segment">
              <label htmlFor="status">Status</label>
              <input
                type="text"
                id="status"
                name="status"
                value={addProductData.status}
                onChange={handleOnChange}
              />
            </div>
            <div className="form-segment">
              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={addProductData.quantity}
                onChange={handleOnChange}
              />
            </div>
            <div className="form-segment">
              <label htmlFor="categoryid">Category Id</label>
              <input
                type="text"
                id="categoryid"
                name="categoryid"
                value={addProductData.categoryid}
                onChange={handleOnChange}
              />
            </div>
          </div>
        </div>
        <div className="add-product-form-attachments">
          <label htmlFor="">Upload Images</label>
          <input
            type="file"
            accept=".jpg, .png, .jpeg"
            name="images"
            ref={imagesInputRef}
            multiple
          />
        </div>
        <div className="add-product-form-footer">
          <button
            onClick={() =>
              setAddProductData({
                productname: "",
                productdescription: "",
                price: "",
                status: "",
                quantity: "",
                categoryid: "",
              })
            }
          >
            Cancel
          </button>
          <button type="sumbit" style={{padding: isLoading ? '1px 10px' : ''}}>
            Add Product {isLoading && <Spinner className="add-product-spinner"/>}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProductForm;
