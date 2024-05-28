import './App.css';
import {Route, Routes} from 'react-router-dom';
import LandingPage from './screens/LandingPage';
import LoginSignup from './screens/LoginSignup';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/getstarted' element={<LoginSignup/>} />
      </Routes>
    </>
  );
}

export default App;
