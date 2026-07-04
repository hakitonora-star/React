import React,{ useEffect, useState,useMemo } from "react";
import ReactDOM from "react-dom/client";

function App(){
    const [count,setCount]=useState(0);
    const [givenNumber,setNumber]=useState("");
    const [result,setResult]=useState(null)



    function Fibonaaci(n){
        if(n<=1){
            return n;
        }
        return Fibonaaci(n-1)+Fibonaaci(n-2);

    }
//useMemo is a React Hook that remembers (memoizes) the result of a calculation so React doesn't recompute it on every render.
//    const Fibo = useMemo(() => Fibonaaci(Number(givenNumber)), [givenNumber]); // iska mtlb finocaaci jabhi call hoga jab number change hoga 
// useMemo useMemo(Fibonaaci(givenNumber),[number]) yha call back nhi likhenge to dunction direct clal hojayega jabki fucntion jabhi call hoga jab number change hoga isliye waha call back fucntion aayega

// by use effect
useEffect(()=>{
    setResult(Fibonaaci(givenNumber)); 
},[givenNumber]);




    return(
        <>

        <h1>Counter is: {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <div>
            <h2>Fibonaaci number is:{result}</h2>
            <input type="number" value={givenNumber}onChange={(e)=>setNumber(e.target.value)}></input>
        </div>


        </>
    )
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)