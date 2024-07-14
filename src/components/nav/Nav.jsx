import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegUser } from "react-icons/fa6";
import NavIcon from '../../assets/Icon.png'
import { IoCartOutline } from "react-icons/io5";

import './Nav.css'

const Nav = () => {
  return (
    <div className="container">
    <nav className='nav'>
      <ul className='nav-list'>
      <Link className='nav-profile' to="/profile"><FaRegUser className='react-icon-profile' /> My Profile</Link>
      <Link className='e-com' to="/"><img src={NavIcon} alt="navicon" /> E-COMM</Link>
      <Link to="/cart"><IoCartOutline className='react-icon'  /></Link>
      </ul>
    </nav>
    </div>
  )
}

export default Nav