import React from 'react'
import { Dropdown } from './Dropdown'
import HeroImg from '../assets/WorldMap.png'


export const Hero = () => {
  return (
    <>
    <img src={HeroImg} alt="" className="bg-cover bg-center w-84"/>
    <Dropdown/>
    </>
  )
}
