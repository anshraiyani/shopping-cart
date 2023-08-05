import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <div className="info-container">
        <div className="home-header">
          <h1>SHOPIFY</h1>
        </div>
        <div className="home-info">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
          quia cum maxime sequi ad similique hic placeat, est accusantium
          blanditiis explicabo illum reiciendis, voluptatibus totam vitae,
          necessitatibus facilis sint debitis.
        </div>
        <div className="shop-btn">
          <NavLink to='/shop' className='home-btn' >View Products</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Home;
