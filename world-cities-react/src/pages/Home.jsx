import React from 'react'
import { Navbar } from '../components/Navbar'
import { Dropdown } from '../components/Dropdown'
import { CardDisplaySec } from '../components/CardDisplaySec'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Footer />
    </div>
  )
}
