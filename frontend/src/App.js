import './App.css';
import {Route, Routes} from 'react-router-dom';
import LandingPage from './screens/LandingPage';
import LoginSignup from './screens/LoginSignup';
import ForgotPassword from './screens/ForgotPassword';
import UpdatePassword from './screens/UpdatePassword';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/getstarted' element={<LoginSignup/>} />
        <Route path='/forgotpassword' element={<ForgotPassword/>} />
        <Route path='/updatepassword/:token' element={<UpdatePassword/>} />
      </Routes>
    </>
  );
}

export default App;
