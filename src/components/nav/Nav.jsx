import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa6";
import NavIcon from '../../assets/Icon.png';
import { IoCartOutline } from "react-icons/io5";

import './Nav.css';

const Nav = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    const isLoggedIn = Boolean(localStorage.getItem('token')); 

    if (isLoggedIn) {
      navigate('/profile');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="container">
      <nav className='nav'>
        <ul className='nav-list'>
          <li onClick={handleProfileClick} className='nav-profile'>
            <FaRegUser className='react-icon-profile' /> My Profile
          </li>
          <Link className='e-com' to="/">
            <img src={NavIcon} alt="navicon" /> E-COMM
          </Link>
          <Link to="/cart">
            <IoCartOutline className='react-icon' />
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
