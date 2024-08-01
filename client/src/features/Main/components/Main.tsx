import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'

function Main(): JSX.Element {
  return (
    <div className='main'>
    <div className='nav'>
      <NavBar/>
      </div>
      <div className='body'>
        <Outlet/>
      </div>
      <div className='foot'>
        <Footer/>
      </div>
      </div>
  )
}

export default Main