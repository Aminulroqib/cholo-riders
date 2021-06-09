import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <h1 className='tittle'>Cholo Riders</h1>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/destination">Destination</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li >
              <Link to="/login" className='login'>Login</Link>
            </li>
          </ul>
        </nav>

        </div>
    );
};

export default Header;