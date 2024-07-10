import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import LandingPage from '../screens/LandingPage';
import LoginSignup from '../screens/LoginSignup';
import ForgotPassword from '../screens/ForgotPassword';
import UpdatePassword from '../screens/UpdatePassword';
import ProductListing from '../screens/ProductListing';

import AccessAccount from '../components/CommonInterface/LoginSignup/AccessAccount/AccessAccount';
import ProductView from '../screens/ProductView';
import Getstart from '../screens/Getstarted';
import Studentprofile from '../screens/Studentprofile';
import SellerDashboard from '../screens/SellerDashboard';
// import BuyerWelcome from '../screens/BuyerWelcome';
import SellerWelcome from '../screens/SellerWelcome';
import AddProduct from '../screens/AddProduct';
import SellerViewProducts from '../screens/SellerViewProducts';
import SellerProductRequests from '../screens/SellerProductRequests';
import BuyerProductRequests from '../screens/BuyerProductRequests';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <LandingPage /> },
    
      { path: 'access-account', element: <AccessAccount /> },
    
      { path: 'getStarted', element:  <Getstart /> },
  
      { path: 'buyer-login', element: <LoginSignup /> },
      { path: 'buyer-signup', element: <LoginSignup /> },
      { path: 'forgotpassword', element: <ForgotPassword /> },
      { path: 'updatepassword/:token', element: <UpdatePassword /> },
      { path: 'student-profile', element: <Studentprofile /> },
    ],
  },
  
  
  { 
    path: '/buyer',
    children: [
    
      { path: 'productlist', element: <ProductListing/> },
      { path: 'products/:productid', element: <ProductView /> },
    
      { path: 'product-requests', element: <BuyerProductRequests /> },
      
    ]},
    {
      path: '/seller',
      children: [
        { path: 'welcome', element: <SellerWelcome/> },
        { path: 'seller-dashboard', element: <SellerDashboard /> },
        { path: 'add-product', element: <AddProduct /> },
        { path: 'view-product', element: <SellerViewProducts /> },
        { path: 'product-requests', element: <SellerProductRequests /> },
      ]
    }
]);

export default router;
