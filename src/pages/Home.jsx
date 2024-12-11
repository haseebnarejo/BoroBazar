import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Brands from '../components/Brands'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Banner from '../components/Banner'
import PopularProducts from '../components/PopularProducts'
import Collections from '../components/Collections'
import Banner2 from '../components/banner2'
import Footer from '../components/Footer'


function Home() {
  return (
    <div>
        <Header />
        <Hero />
        <Brands />
        <Categories />
        <Products />
        <Banner />
        <PopularProducts />
        <Collections />
        <Banner2 />
        <Footer />
    </div>
  )
}

export default Home
