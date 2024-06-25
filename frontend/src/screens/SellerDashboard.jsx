import React from 'react';
import SellerSidebar from '../components/SellerInterface/SellerDashboard/SellerSidebar';
import SellerTopNavbar from '../components/SellerInterface/SellerDashboard/SellerTopNavbar';
import SellerOverview from '../components/SellerInterface/SellerDashboard/SellerOverview';

function SellerDashboard() {
  return (
    <>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <SellerSidebar/>
        <SellerTopNavbar/>
      </div>
      <div style={{display: 'flex', justifyContent: 'end', alignItems: 'center'}}>
        <SellerOverview/>
      </div>
    </>
  )
}

export default SellerDashboard