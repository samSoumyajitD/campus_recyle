import React, { useState } from "react";
import "./ActivitySection.css";
import Googleicon from "../../../images/google-icon.png";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

import { authroutes } from "../../../apis/apis";
import { apiConnector } from "../../../utils/Apiconnecter";

function ActivitySection() {
  const [activity, setActivity] = useState(false);
  const toggleActivity = () => {
    if (activity) {
      setActivity(false);
      setVerificationStage(false);
    } else {
      setActivity(true);
    }
  };

  const [verificationStage, setVerificationStage] = useState(false);
  const toggleVerificationStage = () => {
    if (verificationStage) {
      setVerificationStage(false);
    } else {
      setVerificationStage(true);
    }
  };

  const [otp, setOtp] = useState("");

  const [signUpDetails, setSignUpDetails] = useState({
    email: "",
    firstname: "",
    lastname: "",
    password: "",
    confirmpassword: "",
    otp: "",
    accounttype: "Buyer"
  })
  const handleOnchangeSignup = (e) => {
    setSignUpDetails({...signUpDetails, [e.target.name]: e.target.value})
  }
  const handleSignup = () => {

  }

  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: ""
  })
  const handleOnchangelogin = (e) => {
    setLoginDetails({...loginDetails, [e.target.name]: e.target.value})
  }
  const handleLogin = async(e) => {
    e.preventDefault();
    console.log("controll reached")
    try {
      const responseObj = await apiConnector(
        "POST",
        authroutes.LOGIN_API,
        loginDetails
      )

      
      console.log(responseObj);
      if(responseObj.success){
        localStorage.setItem("campusrecycletoken", responseObj.token)
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="activity-body">
      <div
        class={`container ${activity ? "right-panel-active" : ""}`}
        id="container"
      >
        <div class="form-container sign-up-container">
          <span className="activity-logo">Campus Recycle</span>
          {
            !verificationStage &&
            <form onSubmit={toggleVerificationStage}>
              <h1>Create Account</h1>
              <div class="social-container">
                <button className="activity-signin-google-btn">
                  <img src={Googleicon} className="" alt="" /> Sign up with Google
                </button>
              </div>
              <span>or use your email for registration</span>
              <input type="text" placeholder="First Name" name="firstname" value={signUpDetails.firstname} onChange={handleOnchangeSignup}/>
              <input type="text" placeholder="Last Name" name="lastname" value={signUpDetails.lastname} onChange={handleOnchangeSignup}/>
              <input type="email" placeholder="Email" name="email" value={signUpDetails.email} onChange={handleOnchangeSignup}/>
              <input type="password" placeholder="Password" name="password" value={signUpDetails.password} onChange={handleOnchangeSignup}/>
              <input type="password" placeholder="Confirm Password" name="confirmpassword" value={signUpDetails.confirmpassword} onChange={handleOnchangeSignup}/>
              <button type="submit">Sign Up</button>
              <p className="activity-donthaveaccnt">
                Already have an account?{" "}
                <Link onClick={toggleActivity}>Sign in</Link>
              </p>
            </form>
          }
          {
            verificationStage &&
            <form onSubmit={handleSignup}>
              <h1>Verify Mobile</h1>
              <input type="text" placeholder="First Name" value={otp} onChange={(e)=>setOtp(e.target.value)}/>
              <button type="submit">Verify</button>
              <p className="activity-donthaveaccnt">
                Already have an account?{" "}
                <Link onClick={toggleActivity}>Sign in</Link>
              </p>
            </form>
          }
        </div>
        <div class="form-container sign-in-container">
          <span className="activity-logo">Campus Recycle</span>
          <form onSubmit={handleLogin}>
            <h1>Sign in</h1>
            <div class="social-container">
              <button className="activity-signin-google-btn">
                <img src={Googleicon} className="" alt="" /> Sign in with Google
              </button>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" name="email" value={loginDetails.email} onChange={handleOnchangelogin}/>
            <input type="password" placeholder="Password" name="password" value={loginDetails.password} onChange={handleOnchangelogin}/>
            <Link>Forgot your password?</Link>
            <button type="submit">Sign In</button>
            <p className="activity-donthaveaccnt">
              Don't have an account?{" "}
              <Link onClick={toggleActivity}>Sign up</Link>
            </p>
          </form>
        </div>
        <div class="overlay-container">
          <div className="overlay">
            <div class="overlay-panel overlay-left">
              <Carousel>
                <Carousel.Item>
                  <img
                    src="https://cdn.dribbble.com/userupload/10957436/file/original-f9c117451ef8c95fd574b63d18ae9389.png?resize=400x0"
                    alt=""
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src="https://cdn.dribbble.com/userupload/10957436/file/original-f9c117451ef8c95fd574b63d18ae9389.png?resize=400x0"
                    alt=""
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src="https://cdn.dribbble.com/userupload/10957436/file/original-f9c117451ef8c95fd574b63d18ae9389.png?resize=400x0"
                    alt=""
                  />
                </Carousel.Item>
              </Carousel>
            </div>
            <div class="overlay-panel overlay-right">
              <Carousel>
                <Carousel.Item>
                  <img
                    src="https://cdn.dribbble.com/userupload/10957436/file/original-f9c117451ef8c95fd574b63d18ae9389.png?resize=400x0"
                    alt=""
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src="https://cdn.dribbble.com/userupload/10957436/file/original-f9c117451ef8c95fd574b63d18ae9389.png?resize=400x0"
                    alt=""
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src="https://cdn.dribbble.com/userupload/10957436/file/original-f9c117451ef8c95fd574b63d18ae9389.png?resize=400x0"
                    alt=""
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivitySection;
