import React, { useEffect } from 'react';
import BuyerWelcomePage from '../components/BuyerInterface/BuyerWelcome/BuyerWelcomePage';
import { useNavigate } from 'react-router-dom';

function BuyerWelcome() {
  const navigate = useNavigate();

  useEffect(()=>{
    if(!localStorage.getItem('campusrecycletoken')){
      navigate('/');
    }
  }, []);
  return (
    <BuyerWelcomePage/>
  )
}

export default BuyerWelcome