import React, { useEffect, useState } from "react";
import "./StudentprofileView.css";
import { Camera, Pencil } from "lucide-react";


function StudentprofileView() {
  const [userDetails, setUserDetails] = useState(null);
  const [updateProfileFormdata, setUpdateProfileFormdata] = useState({
    image: '',
    firstname: '',
    lastname: ''
  });

  const profilePicUpdateOnchange = (e) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = function () {
      setUpdateProfileFormdata({ ...updateProfileFormdata, image: reader.result });
    };
  }


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
        </div>
      </div>
      
      <div className="edit-profile-section">
        <div className="edit-profile-form">
          <form>
            <div className="edit-profile-input-0">
              {
                <>
                  <label className="edit-profile-img-overlay" htmlFor="dp_img" >
                    <Camera/>
                  </label>
                  <input type="file" accept="image/png, image/jpg, image/jpeg" id="dp_img" onChange={(e)=>profilePicUpdateOnchange(e)} hidden/>
                </>
              }
              <img src={updateProfileFormdata.image !== '' ? updateProfileFormdata.image : (userDetails && userDetails.image)} alt="profile" />
            </div>
            <div className="edit-profile-input-1">
              <div>
                <label htmlFor="firstname">Firstname</label>
                <input type="text" id="firstname" />
              </div>
              <div>
                <label htmlFor="lastname">Lastname</label>
                <input type="text" id="lastname" />
              </div>
              <button>Update</button>
            </div>
          </form>
        </div>
      </div>
      
    </div>
  );
}

export default StudentprofileView;
