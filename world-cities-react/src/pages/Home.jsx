import React from 'react'
import { Navbar } from '../components/Navbar'
import { Dropdown } from '../components/Dropdown'
import { CardDisplaySec } from '../components/CardDisplaySec'
import { Footer } from '../components/Footer'

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Dropdown />
      <Footer />
    </div>
  )
}
