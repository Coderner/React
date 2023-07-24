import { useState } from "react";

const Title = () => (
    <a href="/" className="logo">
       <h1 id="title">FoodBite</h1>
    </a>
  ); 

const Header = () => {
    return(
     <div className="header">
        <Title/>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Cart</li>
          </ul>
        </div>
     </div>
    );
}

export default Header;
