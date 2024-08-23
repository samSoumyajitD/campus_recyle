import React from 'react'
import './LandingNumbers.css'

function LandingNumbers() {
  return (
    <div className='landing-numbers'>
        <div>
            <div className='landing-numbers-element'>
                <p className='landing-numbers-element-number'>1000+</p>
                <p className='landing-numbers-element-subject'>Student Members</p>
                <div className='landing-numbers-element-underline'></div>
            </div>
            <div className='landing-numbers-element'>
                <p className='landing-numbers-element-number'>500+</p>
                <p className='landing-numbers-element-subject'>Products</p>
                <div className='landing-numbers-element-underline'></div>
            </div>
        </div>
        <div>
            <div className='landing-numbers-element'>
                <p className='landing-numbers-element-number'>200+</p>
                <p className='landing-numbers-element-subject'>Reviews</p>
                <div className='landing-numbers-element-underline'></div>
            </div>
            <div className='landing-numbers-element'>
                <p className='landing-numbers-element-number'>300+</p>
                <p className='landing-numbers-element-subject'>Daily Visits</p>
                <div className='landing-numbers-element-underline'></div>
            </div>
        </div>
    </div>
  )
}

export default LandingNumbers