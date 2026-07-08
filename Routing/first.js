import React from "react";
import ReactDOM from "react-dom/client"
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router";
import Home from "./src/Home";
import Details from "./src/Detail";
import Dashboard from "./src/Dashboard";
import Contact from "./src/Contact";
import Zero from "./src/zero";
import Hello from "./src/hello";
import Hi from "./src/hi"
import Github from "./src/Github";



function App() {

  return (
    <BrowserRouter>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/Contact">Contact</Link>
    <Link to="/Dashboard">Dashboard</Link>
    <Link to="/Detail">Details</Link>
    <Link to="/Github">Github</Link>
  </nav>

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="/Dashboard" element={<Dashboard />} />

    <Route path="/Detail" element={<Details />}>
      <Route index element={<Zero />} />
      <Route path="Hello" element={<Hello />} />
      <Route path="Hi" element={<Hi />} />
    </Route>

    <Route path="/Github/:name" element={<Github />} />
  </Routes>
</BrowserRouter>
  )








}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)