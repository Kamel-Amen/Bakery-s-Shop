import React from 'react';
import { Link } from 'react-router-dom';
import './home.scss';
import { logo } from '../images';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark static-top'>
      <div className='container'>
        <Link className='navbar-brand' to={'/'}>
          <img
            src={logo}
            className='rounded-circle'
            alt='logo'
            height='60px'
            width='60px'
          />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div
          className='collapse navbar-collapse fs-4'
          id='navbarSupportedContent'
        >
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <a className='nav-link' aria-current='page' href='#home'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' aria-current='page' href='#about'>
                About
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' aria-current='page' href='#order'>
                Order
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' aria-current='page' href='#contact'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
