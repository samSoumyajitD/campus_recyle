import './App.css';
import {Route, Routes} from 'react-router-dom';
import LandingPage from './screens/LandingPage';
import LoginSignup from './screens/LoginSignup';
import ForgotPassword from './screens/ForgotPassword';
import UpdatePassword from './screens/UpdatePassword';
import ProductListing from './screens/ProductListing';
import Getstarted from  './components/LoginSignup/Getstarted/Getstarted';
import AccessAccount from './components/LoginSignup/AccessAccount/AccessAccount';
import ProductView from './screens/ProductView';
import SellerRegistration from './screens/SellerRegistration';
import BuyerProfile from './screens/BuyerProfile';
import SellerDashboard from './screens/SellerDashboard';

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
        <Route path='/products' element={<ProductListing/>}/>
        <Route path='/products/:productid' element={<ProductView/>}/>
        <Route path='/seller-registration' element={<SellerRegistration/>}/>
        <Route path='/buyer-profile' element={<BuyerProfile/>}/>
        <Route path='/seller-dashboard' element={<SellerDashboard/>}/>
      </Routes>
    </>
  );
}

export default App;
