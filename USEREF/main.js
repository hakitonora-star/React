import React,{ useEffect, useState,useMemo, useRef } from "react";
import ReactDOM from "react-dom/client";





function App(){
    const [count,setCount]=useState(0);
    const money=useRef(0); // use ref ek object hota hai aur number us object ke ek key me number pda hota hai vo key hai current
    // money.current use ref previos value ko hold krke rkhta hai
// use ref rerender nhi hota
    return(
        <>
        <h1>Counter is: {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>

           <h1>Money is: {money.current}</h1>
        <button onClick={()=>money.current=money.current+1}>Increment</button>
        </>
    )
}



const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)
