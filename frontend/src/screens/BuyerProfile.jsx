import React from 'react'
import BuyerSidebar from '../components/BuyerInterface/BuyerProfile/BuyerSidebar'
import BuyerProfileView from '../components/BuyerInterface/BuyerProfile/BuyerProfileView'

function BuyerProfile() {
  return (
    <>
      <div style={{display: 'flex', justifyContent: 'end', alignItems: 'center'}}>
        <BuyerSidebar/>
        <BuyerProfileView/>
      </div>
    </>
  )
}

export default BuyerProfile