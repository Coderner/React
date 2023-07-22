import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <a href="/" className="logo">
     <h1 id="title">FoodBite</h1>
  </a>
); 


let HeaderComponent = () => {
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


let Body = () => {
  return(
    <h4>Body</h4>
  );
}

let Footer = () => {
  return(
    <h4>Footer</h4>
  );
}

let AppLayout = () => {
  return(
    <>
        <HeaderComponent/>
        <Body/>
        <Footer/>
    </>
  );
}
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>); 