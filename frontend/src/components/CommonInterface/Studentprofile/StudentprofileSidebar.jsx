import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./StudentprofileSidebar.css";
import { LogOut, Heart, UserRound, ShoppingCart, Package, Star } from 'lucide-react';

function BuyerSidebar() {
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState(null);

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem('campusrecycleuser'));

    setUserDetails(user);
  }, []);
  return (
    <div className="buyer-sidebar-main">
      <div className="logo">
        <h5>Campus Recycle</h5>
      </div>
      <div className="profile-info">
        <img src={userDetails && userDetails.image} alt="" />
        <p>{userDetails && userDetails.firstname} {userDetails && userDetails.lastname}</p>
      </div>
      <div class="buyer-sidebar-navigation">
        <nav class="navigation">
          <Link to={'/student-profile'}>
            <UserRound size={20}/>
            <span>My Profile</span>
          </Link>
          <Link>
            <Star size={20}/>
            <span>Your Reviews</span>
          </Link>
          <Link to={'/buyer/product-requests'}>
            <ShoppingCart size={20}/>
            <span>Your Product Request</span>
          </Link>
          <Link>
            <Heart size={20}/>
            <span>Wishlists</span>
          </Link>
          <Link to='/buyer/productlist'>
            <Package size={20}/>
            <span>Explore</span>
          </Link>
          <Link onClick={()=>{
            localStorage.removeItem('campusrecycletoken');
            localStorage.removeItem('campusrecycleuser');
            navigate('/');
          }}>
            <LogOut size={20}/>
            <span>Logout</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default BuyerSidebar;
