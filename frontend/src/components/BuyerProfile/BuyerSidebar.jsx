import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./BuyerSidebar.css";

function BuyerSidebar() {
  return (
    <div className="buyer-sidebar-main">
      <div className="profile-info">
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
        <p>Profile Name</p>
      </div>
      <div class="buyer-sidebar-navigation">
        <nav class="navigation">
          <Link>
            <i class="ph-browsers"></i>
            <span>Edit Profile</span>
          </Link>
          <Link>
            <i class="ph-check-square"></i>
            <span>View Profile</span>
          </Link>
          <Link>
            <i class="ph-swap"></i>
            <span>View Orders</span>
          </Link>
          <Link>
            <i class="ph-file-text"></i>
            <span>Templates</span>
          </Link>
          <Link>
            <i class="ph-globe"></i>
            <span>SWIFT</span>
          </Link>
          <Link>
            <i class="ph-clipboard-text"></i>
            <span>Exchange</span>
          </Link>
        </nav>
        <footer class="footer">
          <h5>
            Campus Recycle<small>©</small>
          </h5>
          <div>
            Campus Recycle ©<br />
            All Rights Reserved 2021
          </div>
        </footer>
      </div>
    </div>
  );
}

export default BuyerSidebar;
