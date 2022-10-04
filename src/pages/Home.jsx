import React from 'react'
import Hero from '../components/element/Hero'
import Unlocking from '../components/element/Unlocking'
import Intropera from '../components/element/Intropera'
import Empoer from '../components/element/Empoer'
import Developer from '../components/element/Developer'
import Built from '../components/element/Built'
import Designed from '../components/element/Designed'
// import Header from '../components/layout/Header'
// import Footer from '../components/layout/Footer'
import Section from '../components/element/Section'
import Tooken from '../components/element/Tooken'
import Future from '../components/element/Future'
import Finance from '../components/element/Finance'

export default function Home() {
  return (
   <>
   <Hero/>
   <Unlocking/>
   <Empoer/>
   <Section/>
   <Tooken/>
   <Future/>
   <Intropera/>
   <Developer/>
   <Built/>
   <Designed/>
   <Finance/>
   
   </>
  )
}
