import React from "react";
import ReactDOM from "react-dom";

let obj="working fine";
console.log(obj);

let heading = React.createElement("h1",{id:"heading"},"Testing Heading");
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); 