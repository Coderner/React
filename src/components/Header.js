import { useState } from "react";

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
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
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
