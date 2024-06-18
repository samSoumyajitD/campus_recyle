import React from 'react'
import './LandingHero.css'
import { useNavigate } from 'react-router-dom'

function LandingHero() {
    const navigate = useNavigate();
  return (
    <div className='landing-hero'>
        <div className="landing-hero-left">
            <div>
                <div className='landing-hero-left-heading'>
                    <div>
                        <span>Get quality</span>
                        <span className='blue'> Internships</span>
                    </div>
                    <div>
                        <span className='blue'>& Jobs</span>
                        <span> in 3 steps</span>
                    </div>
                </div>
                <div className='landing-hero-left-des'>
                    Network with peers, Learn with community and get access to Internships/ Jobs
                </div>
                <button className="landing-hero-btn" onClick={()=>navigate('/accountoptions')}>
                    Get Started &rarr;
                </button>
            </div>
        </div>
    </div>
  )
}

export default LandingHero