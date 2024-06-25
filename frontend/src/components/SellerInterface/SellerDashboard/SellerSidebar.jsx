import React from "react";
import { Link } from "react-router-dom";
import { LogOut, PackagePlus, CircleGauge, Package, PackageSearch, ChevronDown, Globe } from 'lucide-react';
import './SellerSidebar.css'

function SellerSidebar() {
  return (
    <div className="seller-sidebar-main">
      <div className="logo">
        <h5>Campus Recycle</h5>
      </div>
      <div class="seller-sidebar-navigation">
        <nav class="navigation">
          <span>
            <p>MAIN MENU</p>
            <ChevronDown size={15}/>
          </span>
          <div>
            <Link className="active-sidebar-link">
              <CircleGauge size={20}/>
              <span>Dashboard</span>
            </Link>
            <Link className="active-sidebar-link">
              <Globe size={20}/>
              <span>Explore</span>
            </Link>
          </div>
          <span>
            <p>ON BOARDING</p>
            <ChevronDown size={15}/>
          </span>
          <div>
            <Link>
              <PackageSearch size={20}/>
              <span>View Products</span>
            </Link>
            <Link to='/seller/add-product'>
              <PackagePlus size={20}/>
              <span>Add Product</span>
            </Link>
            <Link>
              <Package size={20}/>
              <span>Active Requests</span>
            </Link>
            <Link to='/'>
              <LogOut size={20}/>
              <span>Logout</span>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default SellerSidebar