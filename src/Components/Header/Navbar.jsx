import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/asset.png'
import { NavLink } from 'react-router-dom'
import {HiMenu} from 'react-icons/hi'
import {HiX} from 'react-icons/hi'

const Navbar = () => {
  const [menu,setMenu] = useState(true);
  return (
    <>
    <nav className='Navbar'>
      <NavLink to="/"><img src={logo} alt="logo" /></NavLink>
       <div className="navbar-links">
          <ul>
            <li><NavLink to="coming-soon">Portfolio</NavLink></li>
            <li><NavLink to="coming-soon">Services</NavLink></li>
            <li><NavLink to="coming-soon">Hire Resources</NavLink></li>
            <li><NavLink to="coming-soon">Company</NavLink></li>
            <li><NavLink to="coming-soon">Blog</NavLink></li>
            <li><NavLink className="contact-us" to="coming-soon">Contact Us</NavLink></li>
          </ul>
        </div>
        <div className="navbar-menu">
          {menu?<HiMenu size={40} onClick={()=>setMenu(false)}/>
          :<HiX size={40} onClick={()=>setMenu(true)}/>}
        {!menu&&(
        <div className="responsive-nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="coming-soon">Portfolio</NavLink>
            <NavLink to="coming-soon">Services</NavLink>
            <NavLink to="coming-soon">Hire Resources</NavLink>
            <NavLink to="coming-soon">Company</NavLink>
            <NavLink to="coming-soon">Blog</NavLink>
            <NavLink to="coming-soon">Contact Us</NavLink>
         </div>
        )}
        </div>
    </nav>
    </>
  )
}

export default Navbar