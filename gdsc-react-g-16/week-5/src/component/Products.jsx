import React from "react";
import { Link, Outlet } from "react-router-dom";


function Products() {
  return (
    <>
      <div>
        <input type="search" placeholder="search products" />
      </div>
      <nav className="nav">
        <Link to="feature" className='nav-link'>Feature</Link>
        <Link to="new" className='nav-link'>New</Link>
      </nav>
      <Outlet />

    </> 
  );
}

export default Products;
