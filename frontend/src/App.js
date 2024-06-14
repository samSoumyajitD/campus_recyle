import './App.css';
import {Route, Routes} from 'react-router-dom';
import LandingPage from './screens/LandingPage';
import LoginSignup from './screens/LoginSignup';
import ForgotPassword from './screens/ForgotPassword';
import UpdatePassword from './screens/UpdatePassword';
import AccountOptions from './screens/AccountOptions';
import ProductListing from './screens/ProductListing';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/accountoptions' element={<AccountOptions/>} />
        <Route path='/getstarted' element={<LoginSignup/>} />
        <Route path='/forgotpassword' element={<ForgotPassword/>} />
        <Route path='/updatepassword/:token' element={<UpdatePassword/>} />
        <Route path='/productlisting' element={<ProductListing/>} />
      </Routes>
    </>
  );
}

export default App;
