const BASE_URL=process.env.REACT_APP_BASE_URL
//user routes apis
export const authroutes={
    LOGIN_API:BASE_URL+"/auth/login",
    SEND_OTP_API:BASE_URL+"/auth/sendotp",
    SIGNUP_API:BASE_URL+"/auth/signup"
}