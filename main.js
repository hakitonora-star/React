import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

function Buttons() {

    const [color,setColor]=useState("black");
    useEffect(()=>{
            document.body.style.backgroundColor = color;
    },[color]);
  return (
    <>
      <h1>Background Color Changer</h1>

      <div className="but">
        <button style={{ backgroundColor: "red" }} onClick={()=>{setColor("red")}}>Red</button>
        <button style={{ backgroundColor: "blue" }}onClick={()=>{setColor("blue")}}>Blue</button>
        <button style={{ backgroundColor: "green" }}onClick={()=>{setColor("green")}}>Green</button>
        <button style={{ backgroundColor: "pink" }}onClick={()=>{setColor("pink")}}>Pink</button>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Buttons />);