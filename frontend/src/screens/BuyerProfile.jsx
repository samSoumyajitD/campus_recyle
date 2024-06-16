import React from 'react'
import BuyerSidebar from '../components/BuyerProfile/BuyerSidebar'
import BuyerProfileView from '../components/BuyerProfile/BuyerProfileView/BuyerProfileView'

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