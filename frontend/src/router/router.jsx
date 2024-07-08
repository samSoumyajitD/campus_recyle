import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import LandingPage from '../screens/LandingPage';
import LoginSignup from '../screens/LoginSignup';
import ForgotPassword from '../screens/ForgotPassword';
import UpdatePassword from '../screens/UpdatePassword';
import ProductListing from '../screens/ProductListing';
import Getstarted from '../components/CommonInterface/LoginSignup/Getstarted/Getstarted';
import AccessAccount from '../components/CommonInterface/LoginSignup/AccessAccount/AccessAccount';
import ProductView from '../screens/ProductView';

import BuyerProfile from '../screens/BuyerProfile';
import SellerDashboard from '../screens/SellerDashboard';
import BuyerWelcome from '../screens/BuyerWelcome';
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
    
      
  
     
     
    ],
  },
  
  { path: 'buyer-login', element: <LoginSignup /> },
  { path: 'buyer-signup', element: <LoginSignup /> },
  { path: 'forgotpassword', element: <ForgotPassword /> },
  { path: 'updatepassword/:token', element: <UpdatePassword /> },
  { 
    path: '/buyer',
    children: [
      { path: 'welcome', element:  <Getstarted /> },
      { path: 'productlist', element: <ProductListing/> },
      { path: 'products/:productid', element: <ProductView /> },
      { path: 'buyer-profile', element: <BuyerProfile /> },
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
