import './App.css';
import {Route, Routes} from 'react-router-dom';
import LandingPage from './screens/LandingPage';
import LoginSignup from './screens/LoginSignup';
import ForgotPassword from './screens/ForgotPassword';
import UpdatePassword from './screens/UpdatePassword';
import Getstarted from  './components/LoginSignup/Getstarted/Getstarted';
import AccessAccount from './components/LoginSignup/AccessAccount/AccessAccount';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/login' element={<LoginSignup/>} />
        <Route path='/forgotpassword' element={<ForgotPassword/>} />
        <Route path='/updatepassword/:token' element={<UpdatePassword/>} />
        <Route path='/getstarted' element={<Getstarted/>}/>
        <Route path='/access-account' element={<AccessAccount/>}/>
      </Routes>
    </>
  );
}

export default App;
