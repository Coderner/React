import React from "react";
import ReactDOM from "react-dom/client";

let obj="working fine";
console.log(obj);

let Heading =()=> (<h1>Heading</h1>)


let Para = () => {
    const sayHi = () =>{
        alert("It is working!!");
    };
    return(
      <>
        
         <p>Hi campers</p>
         <p>How is code going?</p>
         <p>What is up?</p>
         {<Heading/>}
         {new Date().toDateString()}
         <br/>
         {10+8} is eigtheen
         <button onClick={sayHi}>Click to alert</button>
      </>
    );
}
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Para/>); 