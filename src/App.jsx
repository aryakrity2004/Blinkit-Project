import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Cards from './components/Cards'
import ProductCards from './components/ProductCards'
import Snacks from './components/Snacks'
import HookaProduct from './components/HookaProduct'
import MouthFreshner from './components/MouthFreshner'
import Coldrings from './components/Coldrings'
import Candies from './components/Candies'



export default function App() {
  return (
   <div>
    <Header/>
    <HeroSection/>
    <Cards/>
    <ProductCards/>
    <Snacks/>
    <HookaProduct/>
    <MouthFreshner/>
    <Coldrings/>
    <Candies/>
    <Footer/>
   </div>
  )
}
