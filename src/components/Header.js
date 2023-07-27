import { useState } from "react";
import {Link} from "react-router-dom";

const Title = () => (
    <a href="/" className="logo">
       <h1 id="title">FoodBite</h1>
    </a>
  ); 


const Header = () => {
  const[isLoggedIn, setIsLoggedIn] = useState(false);
    return(
     <div className="header">
        <Title/>
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
            <li>Cart</li>
          </ul>
        </div>
        {
          (isLoggedIn)?<button onClick={()=>setIsLoggedIn(false)}>Logout</button>
          :<button onClick={()=>setIsLoggedIn(true)}>Login</button>
        }
        
     </div>
    );
}

export default Header;
