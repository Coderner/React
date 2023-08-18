import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { Outlet } from "react-router-dom";
import userContext from "../utils/userContext";
// import RestrauntMenu from "./components/RestrauntMenu";

let AppLayout = () => {
  const [user, setUser] =useState({
      name:"Panni",
      email:"something@gmail.com"
  })
  return(
    <>
        <userContext.Provider value={{
            user:user,
            setUser:setUser}}>
            <Header/>
            <Outlet/>
            <Footer/>
        </userContext.Provider>
       
    </>
  );
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout/>,
    errorElement: <Error/>,
    children: [{
      path:"/",
      element: <Body/>
    },{
      path:"/about",
      element: <About/>
    },{
      path:"/contact",
      element: <Contact/>
    }]
  }
])
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>); 