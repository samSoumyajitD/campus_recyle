import React from 'react'
import './LandingNumbers.css'

function LandingNumbers() {
  return (
    <div className='landing-numbers'>
        <div>
            <div className='landing-numbers-element'>
                <p className='landing-numbers-element-number'>4000+</p>
                <p className='landing-numbers-element-subject'>Student Members</p>
                <div className='landing-numbers-element-underline'></div>
            </div>
            <div className='landing-numbers-element'>
                <p className='landing-numbers-element-number'>7000+</p>
                <p className='landing-numbers-element-subject'>Products</p>
                <div className='landing-numbers-element-underline'></div>
            </div>
        </div>
        <div>
            <div className='landing-numbers-element'>
                <p className='landing-numbers-element-number'>10000+</p>
                <p className='landing-numbers-element-subject'>Reviews</p>
                <div className='landing-numbers-element-underline'></div>
            </div>
            <div className='landing-numbers-element'>
                <p className='landing-numbers-element-number'>2000+</p>
                <p className='landing-numbers-element-subject'>Daily Visits</p>
                <div className='landing-numbers-element-underline'></div>
            </div>
        </div>
    </div>
  )
}

export default LandingNumbers