import React, { useEffect, useState } from "react";
import "./SellerTopNavbar.css";
import { Link } from "react-router-dom";

function SellerTopNavbar() {
  const [userDetails, setUserDetails] = useState(null);
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
    setUserDetails(user);
  }, []);
  return (
    <div className="seller-top-navbar">
      <div className="profile" onClick={toggleProfileDrop}>
        <img
          src={profilePicture ? profilePicture : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}
          alt=""
        />
        <div>
          <h6>{userDetails && userDetails.firstname}</h6>
          <p>{userDetails && userDetails.email}</p>
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
