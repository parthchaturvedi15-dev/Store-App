import React from 'react'
import Banner from '../../Components/Banner'
import HeroSection from '../../Components/HeroSection'
import CategorySection from '../../Components/CategorySection'
import OffersSection from '../../Components/OfferSection'
import Footer from '../../Components/Footer'

export default function StorePage() {
  return (
    <div>
      <section>
        <Banner/>
        <HeroSection/>
        <CategorySection/>
        <OffersSection/>
        <Footer/>
      </section>
    </div>
  )
}
