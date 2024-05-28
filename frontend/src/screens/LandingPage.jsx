import React from 'react'
import LandingNavbar from '../components/Landing/Navbar/LandingNavbar'
import LandingHero from '../components/Landing/Hero/LandingHero'
import LandingNumbers from '../components/Landing/Numbers/LandingNumbers'
import LandingHowHelps from '../components/Landing/HowHelps/LandingHowHelps'
import LandingReviews from '../components/Landing/Reviews/LandingReviews'
import LandingFaqs from '../components/Landing/Faqs/LandingFaqs'
import LandingStartApplying from '../components/Landing/StartApplying/LandingStartApplying'
import LandingFooter from '../components/Landing/LandingFooter/LandingFooter'

function LandingPage() {
  return (
    <>
        <LandingNavbar/>
        <LandingHero/>
        <LandingNumbers/>
        <LandingHowHelps/>
        <LandingReviews/>
        <LandingFaqs/>
        <LandingStartApplying/>
        <LandingFooter/>
    </>
  )
}

export default LandingPage