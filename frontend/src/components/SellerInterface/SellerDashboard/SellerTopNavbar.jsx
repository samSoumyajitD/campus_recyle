import React, { useState } from "react";
import "./SellerTopNavbar.css";
import { Link } from "react-router-dom";

function SellerTopNavbar() {
  const [profileDrop, setProfileDrop] = useState(false);
  const toggleProfileDrop = () => {
    if (profileDrop) {
      setProfileDrop(false);
    } else {
      setProfileDrop(true);
    }
  };
  return (
    <div className="seller-top-navbar">
      <div className="profile" onClick={toggleProfileDrop}>
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt=""
        />
        <div>
          <h6>User Name</h6>
          <p>user@gmail.com</p>
        </div>
      </div>
      {profileDrop && (
        <div className="dropdown">
          <Link to="/buyer/buyer-profile">See Profile</Link>
          <Link to="/buyer/productlist">Switch to Buyer</Link>
          <Link to="/">Logout</Link>
        </div>
      )}
    </div>
  );
}

export default SellerTopNavbar;
