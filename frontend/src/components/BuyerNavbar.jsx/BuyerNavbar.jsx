import React from 'react';
import './BuyerNavbar.css';
import { Menu } from 'lucide-react';

function BuyerNavbar() {
  return (
    <div className='buyer-navbar'>
        <div className="buyer-navbar-logo">
            <p>Campus Recycle</p>
        </div>
        <div className="buyer-navbar-options">
            <li className={`buyer-navbar-options-item ${window.location.pathname === '/productlisting' ? 'active' : ''}`}>Products</li>
            <li className='buyer-navbar-options-item'>Favourites</li>
            <li className='buyer-navbar-options-item'>About</li>
            <li className='buyer-navbar-options-item'>Reviews</li>
        </div>
        <div className="buyer-navbar-accounts">
            <div>
                <Menu size={20} />
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default BuyerNavbar