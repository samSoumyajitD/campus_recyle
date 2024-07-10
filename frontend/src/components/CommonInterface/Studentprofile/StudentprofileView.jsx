import React, { useEffect, useState } from "react";
import "./StudentprofileView.css";
import { Pencil } from "lucide-react";


function StudentprofileView() {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem('campusrecycleuser'));

    setUserDetails(user);
  }, []);
  return (
    <div className="profile-view">
      <div className="top">
        <img
          src={userDetails && userDetails.image}
          alt=""
        />
      </div>
      <div className="profile-details">
        <div>
          <h4>{userDetails && userDetails.firstname} {userDetails && userDetails.lastname}</h4>
          <p>{userDetails && userDetails.email}</p>
          <p>Buyer</p>
        </div>
        <div className="total-orders">
          Edit Profile <Pencil size={15} />
        </div>
      </div>
      
        
      
    </div>
  );
}

export default StudentprofileView;
