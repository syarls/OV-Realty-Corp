import React from 'react'
import './Navbar.css'
import { Link as ScrollLink } from 'react-scroll'
import logo from '../../assets/logo2.png'


const Navbar = () => {
  return (
    <nav className='container'>
      <div className='section flex-container'>
        <img src={logo} alt="Logo" className='logo' />
        <h2 className='companyName'>Ov Realty Corp</h2>
      </div>
      <ul>
        <li className='redirect'>
          <ScrollLink 
            to='header' 
            smooth={true} 
            offset={0} 
            duration={500} 
          >
            Home
          </ScrollLink>
        </li>
        <li className='redirect'>
          <ScrollLink 
            to='properties' 
            smooth={true} 
            offset={0} 
            duration={500} 
          >
            Properties
          </ScrollLink>
        </li>
        <li>
          <ScrollLink 
            to='contact' 
            smooth={true} 
            offset={0} 
            duration={500} 
          >
            <button className='btn'>Contact Us</button>
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;