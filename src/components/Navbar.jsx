import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {

  const navLinkStyles=({isActive})=>{
    return{
      color:'white',
      textDecoration:isActive?"underline":"none",
    }
  }

  return (
    <div>
      <div></div>
      <nav>
        <div className="logo">
          <h1>Shopify</h1>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink style={navLinkStyles} to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink style={navLinkStyles} to='/shop'>Shop</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
