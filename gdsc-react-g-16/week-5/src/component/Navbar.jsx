import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <nav className="nav">
            <Link to='/' className='nav-link'>Home</Link>
            <Link to='/about' className='nav-link'>AboutUs</Link>
            <Link to="/Contact" className='nav-link'>Contact</Link>
            <Link to="/products" className='nav-link' >Products</Link>
        </nav>
        
      
    );
}

export default Navbar;