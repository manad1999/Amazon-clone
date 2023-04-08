import React from 'react'
import "./Home.css"
import { Product } from './Product'

export const Home = () => {

  return (
    <div className='home'>
        <div className='home_container'>
            <img className='home_img' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' />
        </div>
        <div className='home_row'>
            <Product id = '1234' title= "Info" price = {29.99} image = "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg" rating={3} />
            <Product />
        </div>
        <div className='home_row'>
            <Product />
            <Product />
        </div>
        <div className='home_row'>

        </div>
    </div>
  )
}

