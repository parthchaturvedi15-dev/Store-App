import React from 'react';
import {Outlet} from 'react-router-dom';
import Banner from '../../Components/Banner';
import HeroSection from '../../Components/HeroSection';
import CategorySection from '../../Components/CategorySection';
import OffersSection from '../../Components/OfferSection';
import Footer from '../../Components/Footer';
import ThemeToggleBttn from '../../Components/ThemeButton';


export default function StorePage() {
  return (
    <>
    <div>
      <section>
        <Banner/>
        <HeroSection/>
        <CategorySection/>
        <OffersSection/>
      </section>
    </div>
    </>
  );
}
