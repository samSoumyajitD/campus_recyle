import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogOut, PackagePlus, UserRound, Pencil, CircleGauge, Package } from 'lucide-react'

function SellerSidebar() {
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
            <span>View Profile</span>
          </Link>
          <Link>
            <Pencil size={20}/>
            <span>Edit Profile</span>
          </Link>
          <Link>
            <CircleGauge size={20}/>
            <span>Dashboard</span>
          </Link>
          <Link>
            <PackagePlus size={20}/>
            <span>Add Product</span>
          </Link>
          <Link>
            <Package size={20}/>
            <span>Active Orders</span>
          </Link>
          <Link to='/'>
            <LogOut size={20}/>
            <span>Logout</span>
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default SellerSidebar