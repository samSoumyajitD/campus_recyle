import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./BuyerSidebar.css";
import { LogOut, Heart, UserRound, ShoppingCart, Package, Star } from 'lucide-react';

function BuyerSidebar() {
  return (
    <div className="buyer-sidebar-main">
      <div className="logo">
        <h5>Campus Recycle</h5>
      </div>
      <div className="profile-info">
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
        <p>Profile Name</p>
      </div>
      <div class="buyer-sidebar-navigation">
        <nav class="navigation">
          <Link>
            <UserRound size={20}/>
            <span>My Profile</span>
          </Link>
          <Link>
            <Star size={20}/>
            <span>Your Reviews</span>
          </Link>
          <Link>
            <ShoppingCart size={20}/>
            <span>Your Orders</span>
          </Link>
          <Link>
            <Heart size={20}/>
            <span>Wishlists</span>
          </Link>
          <Link to='/products'>
            <Package size={20}/>
            <span>Explore</span>
          </Link>
          <Link>
            <LogOut size={20}/>
            <span>Logout</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default BuyerSidebar;
