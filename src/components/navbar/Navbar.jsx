import React from 'react'
import './Navbar.css'

import logo from '../../assets/logo2.png'


const Navbar = () => {
  return (
    <nav className='container'>
        <div className='section flex-container'>
        <img src= {logo} alt="" className='logo' />
        <h2 className='companyName'>Ov Realty Corp</h2>
        </div>
        <ul>
        <li className='redirect'>Home</li>
        <li className='redirect'>Properties</li>
        <li className='redirect'>About</li>
        <li><button className='btn'>Contact Us</button></li>
        
        </ul>
      
    </nav>
  )
}

export default Navbar
