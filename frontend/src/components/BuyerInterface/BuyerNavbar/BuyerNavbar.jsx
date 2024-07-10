import React, { useEffect, useState } from "react";
import "./BuyerNavbar.css";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

function BuyerNavbar() {
  const [profilePicture, setProfilePicture] = useState(null);
  const [profileDrop, setProfileDrop] = useState(false);
  const toggleProfileDrop = () => {
    if (profileDrop) {
      setProfileDrop(false);
    } else {
      setProfileDrop(true);
    }
  };

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("campusrecycleuser"));
    setProfilePicture(user.image);
  }, []);
  return (
    <div className="buyer-navbar">
      <div className="buyer-navbar-logo">
        <p>Campus Recycle</p>
      </div>
      <div className="buyer-navbar-options">
        <Link
          to="/buyer/productlist"
          className={`buyer-navbar-options-item ${
            window.location.pathname === "/buyer/products" ? "active" : ""
          }`}
        >
          Products
        </Link>
        <Link className="buyer-navbar-options-item">Favourites</Link>
        <Link className="buyer-navbar-options-item">About</Link>
        <Link className="buyer-navbar-options-item">Reviews</Link>
      </div>
      <div className="buyer-navbar-accounts">
        <div className="toggle" onClick={toggleProfileDrop}>
          <Menu size={20} />
          <img
            src={profilePicture ? profilePicture : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}
            alt=""
          />
        </div>
        {profileDrop && (
          <div className="dropdown">
            <Link to="/student-profile">See Profile</Link>
            <Link to="/seller/seller-dashboard">Switch to Seller</Link>
            <Link to="/">Logout</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default BuyerNavbar;
