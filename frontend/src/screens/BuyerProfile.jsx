import React, { useEffect } from 'react'
import BuyerSidebar from '../components/BuyerInterface/BuyerProfile/BuyerSidebar'
import BuyerProfileView from '../components/BuyerInterface/BuyerProfile/BuyerProfileView'
import { useNavigate } from 'react-router-dom';

function BuyerProfile() {
  const navigate = useNavigate();

  useEffect(()=>{
    if(!localStorage.getItem('campusrecycletoken')){
      navigate('/');
    }
  }, []);
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