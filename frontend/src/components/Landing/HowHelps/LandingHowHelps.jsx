import React from 'react'
import './LandingHowHelps.css'
import Upskilling from '../../../images/upskilling.png';
import Hassle from '../../../images/hassle.png';
import Resume from '../../../images/resume.png';
import EasyMoney from '../../../images/easymoney.png';
import { useNavigate } from 'react-router-dom';

function LandingHowHelps() {
    const navigate = useNavigate();
  return (
    <div className='landing-how-helps'>
        <h4>How Campus Recycle helps you</h4>
        <div className="landing-how-helps-cards">
            <div className="card">
                <div>
                    <img src={Upskilling} alt="" />
                </div>
                <div>Get Upskilled</div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, laboriosam.</p>
            </div>
            <div className="card">
                <div>
                    <img src={Hassle} alt="" />
                </div>
                <div>Get Upskilled</div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, laboriosam.</p>
            </div>
            <div className="card">
                <div>
                    <img src={Resume} alt="" />
                </div>
                <div>Get Upskilled</div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, laboriosam.</p>
            </div>
            <div className="card">
                <div>
                    <img src={EasyMoney} alt="" />
                </div>
                <div>Get Upskilled</div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, laboriosam.</p>
            </div>
        </div>
        <div>
            <button className="landing-how-helps-btn" onClick={()=>navigate('/accountoptions')}>Get Started</button>
        </div>
    </div>
  )
}

export default LandingHowHelps