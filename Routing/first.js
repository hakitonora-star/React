import React  from "react";
import ReactDOM from "react-dom/client"
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router";
import Home from "./src/Home";
import Contact from "./src/Contact";
import DashBoard from "./src/DashBoard";
import Details from "./src/Detail";
import Zero from "./src/zero";
import Hello from "./src/hello";
import Hi from "./src/Hi";

function App(){

    return(
      <BrowserRouter>
       {/* ye neeche wala header hain */}
      <nav> 
        <Link to="/">Home</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/DashBoard">DashBoard</Link>
        <Link to="/Detail">Details</Link>
        




      </nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Contact" element={<Contact></Contact>}></Route>
        <Route path="/DashBoard" element={<DashBoard></DashBoard>}></Route>
       <Route path="/Detail" element={<Details />}>
      <Route index element={<Zero></Zero>}></Route>
      <Route path="Hello" element={<Hello></Hello>}></Route>
       <Route path="Hi" element={<Hi></Hi>}></Route>
       </Route>
      </Routes>
      {/* footer */}
      </BrowserRouter>
    )

}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)