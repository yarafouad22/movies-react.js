import React from 'react'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <Navbar/>
      <div className="container">
      <Outlet></Outlet>
      </div>
      
      <Footer/>
    </>
  )
}
