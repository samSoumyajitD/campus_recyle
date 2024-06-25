import React from 'react'
import AddProductForm from '../components/SellerInterface/SellerAddProduct/AddProductForm'
import SellerSidebar from '../components/SellerInterface/SellerDashboard/SellerSidebar'
import SellerTopNavbar from '../components/SellerInterface/SellerDashboard/SellerTopNavbar'

function AddProduct() {
  return (
    <>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <SellerSidebar/>
            <SellerTopNavbar/>
        </div>
        <div style={{display: 'flex', justifyContent: 'end', alignItems: 'center'}}>
            <AddProductForm/>
        </div>
    </>
  )
}

export default AddProduct