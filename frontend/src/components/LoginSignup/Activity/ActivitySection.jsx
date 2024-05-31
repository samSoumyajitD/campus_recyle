import React, { useEffect, useState } from "react";
import "./ActivitySection.css";
import Googleicon from "../../../images/google-icon.png";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { Eye } from 'lucide-react';

import { authroutes } from "../../../apis/apis";
import { apiConnector } from "../../../utils/Apiconnecter";

function ActivitySection() {
  const [errorMsg, setErrorMsg] = useState({
    msg: '',
    type: ''
  });

  const [passView, setPassView] = useState(false);
  const togglePassView = () => {
    if(passView){
      setPassView(false);
    }else{
      setPassView(true);
    }
  }
  
  const [activity, setActivity] = useState(false);
  const toggleActivity = () => {
    if (activity) {
      setActivity(false);
      setVerificationStage(false);
    } else {
      setActivity(true);
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

  const [verificationStage, setVerificationStage] = useState(false);
  
  const toggleVerificationStage = async(e) => {
    e.preventDefault();
    try {
      const response = await apiConnector(
        "POST",
        authroutes.SEND_OTP_API,
        {
          email: signUpDetails.email
        }
      )
      console.log(response.data);
      if(response.data.success){
        setSignUpDetails({...signUpDetails, otp: response.data.data.otp});
        if (verificationStage) {
          setVerificationStage(false);
        } else {
          setVerificationStage(true);
        }
      }else{
        if(response.data.message === "User already Registered"){
          setErrorMsg({
            msg: "User already Registered",
            type: 'email already exists'
          })
        }
      }
    } catch (error) {
      console.log(error);
    }
  };


  const handleOnchangeSignup = (e) => {
    setSignUpDetails({...signUpDetails, [e.target.name]: e.target.value})
  }

  const handleSignup = async(e) => {
    e.preventDefault();
    if(signUpDetails.otp !== otp){
      return setErrorMsg({msg: "Incorrect OTP", type: "otp did not matched"})
    }
    try {
      const responseObj = await apiConnector(
        "POST",
        authroutes.SIGNUP_API,
        signUpDetails
      )

      console.log(responseObj.data);
      if(responseObj.data.success){
        // localStorage.setItem("campusrecycletoken", responseObj.token)
        console.log("success");
        setSignUpDetails({
          email: "",
          firstname: "",
          lastname: "",
          password: "",
          confirmpassword: "",
          otp: "",
          accounttype: "Buyer"
        })
      }else{
        if(responseObj.data.message === "User already Registered"){
          setErrorMsg({
            msg: "User already Registered",
            type: 'email already exists'
          })
        }
      }
    } catch (error) {
      console.log(error);
    }
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
    try {
      const responseObj = await apiConnector(
        "POST",
        authroutes.LOGIN_API,
        loginDetails
      )
      console.log(responseObj);
      if(responseObj.data.success){
        localStorage.setItem("campusrecycletoken", responseObj.data.token)
      }else{
        if(responseObj.data.message === "User Not Registered"){
          setErrorMsg({
            msg: "User Not Registered",
            type: 'email does not exists'
          })
        }
      }
    } catch (error) {
      console.log(error);
    }
  }


  const [passMatched, setPassMatched] = useState(false);
  useEffect(()=>{
    if(signUpDetails.password !== signUpDetails.confirmpassword){
      setPassMatched(false);
    }else{
      setPassMatched(true);
    }
  })

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
              <input type="text" placeholder="First Name" name="firstname" value={signUpDetails.firstname} onChange={handleOnchangeSignup} required/>
              <input type="text" placeholder="Last Name" name="lastname" value={signUpDetails.lastname} onChange={handleOnchangeSignup} required/>
              <input type="email" placeholder="Email" name="email" value={signUpDetails.email} onChange={handleOnchangeSignup} required/>
              <p className="login-signup-error-msg">{errorMsg.type === 'email already exists' ? errorMsg.msg : ''}</p>
              <div className="login-signup-password-div">
                <input type={passView ? "text" : "password"} placeholder="Password" name="password" value={signUpDetails.password} onChange={handleOnchangeSignup} required/>
                <Eye size={20} style={{cursor: 'pointer'}} onClick={togglePassView}/>
              </div>
              <div className="login-signup-password-div">
                <input type={passView ? "text" : "password"} placeholder="Confirm Password" name="confirmpassword" value={signUpDetails.confirmpassword} onChange={handleOnchangeSignup} required/>
                <Eye size={20} style={{cursor: 'pointer'}} onClick={togglePassView}/>
              </div>
              <p className="login-signup-error-msg">{!passMatched && 'Password not matched'}</p>
              <button type="submit" className={passMatched ? '' : 'btn-disabled'} disabled={!passMatched}>Sign Up</button>
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
              <input type="text" placeholder="First Name" value={otp} onChange={(e)=>setOtp(e.target.value)} required/>
              <p className="login-signup-error-msg">{errorMsg.type === 'otp did not matched' ? errorMsg.msg : ''}</p>
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
            <input type="email" placeholder="Email" name="email" value={loginDetails.email} onChange={handleOnchangelogin} required/>
            <p className="login-signup-error-msg">{errorMsg.type === 'email does not exists' ? errorMsg.msg : ''}</p>
            <div className="login-signup-password-div">
            <input type={passView ? "text" : "password"} placeholder="Password" name="password" value={loginDetails.password} onChange={handleOnchangelogin} required/>
              <Eye size={20} style={{cursor: 'pointer'}} onClick={togglePassView}/>
            </div>
            <p className="login-signup-error-msg">{errorMsg.type === 'wrong password' ? errorMsg.msg : ''}</p>
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
