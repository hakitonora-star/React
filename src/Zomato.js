import React  from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter ,RouterProvider,Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

const Zomato = () => {
  return (
    <div className="app">
      <Header />
      {/* <Body /> */}
      <Outlet/> {/*outlet filles the children function according to path agar hmne path diya contact toh auotomatic about function aajeyga agat path diya about toh automatic about function aajeyga*/ }
    </div>
  );
};
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Zomato />,
    children:[
      {
        path:"/", 
        element:<Body/>

      },
     {
    path:"/about",
    element:<About/>
      
  },
  {
    path:"/contact",
    element:<Contact/>
  },
    ],
    errorElement:<Error/>

  },
  

]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);