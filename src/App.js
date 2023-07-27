// import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Children } from "react";

let AppLayout = () => {
  return(
    <>
        <Header/>
        <Outlet/>
        <Footer/>
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