import React from 'react'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'

function Layout() {
  return (
    <>
      <Header />
      {/* outlet is used to inject dynamic components inplace of this */}
      <Outlet /> 
      <Footer />
    </>
  )
}

export default Layout