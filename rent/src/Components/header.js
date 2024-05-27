import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
function Header()
{
    return (
        <div>
          
          <div className='header'>
          <Link to = "/">HOME</Link>
            <span className='nt3'>Rentify - Where Renting Meets Simplicity</span>
            <Link to = "/login">Login</Link>

          </div>
        </div>
    )
}

export default Header;