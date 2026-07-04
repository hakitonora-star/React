import React, { useRef, useState } from "react";
import ReactDOM from "react-dom/client";

function Stopwatch() {
    const [time, setTime] = useState(0);
    const [isRunning,setIsRunning]=useState(false)
    const intervalRef=useRef(0) // ye phele ki value store krke rkhta hai

    function start() {
        if(!isRunning) // if watch is no running
       intervalRef.current= setInterval(() => {// set interval ka kaam hai har ek sec me set time ko call kare jb ye stop hoke dobara chlega toh wahi se start hoga
            setTime((prevTime) => prevTime + 1);
        }, 1000);
        setIsRunning(true); //yeh btyaega watch chl rhi hai dusta click nhi hoga
    }
 
    function stop(){
        if(isRunning){
           clearInterval(intervalRef.current) ;// clear interval refcurreynt mein set interval ko rok deta hai
  intervalRef.current=null;
  setIsRunning(false); // iska mtlb watch ruk gyi

        }

    }
    function reset(){
           clearInterval(intervalRef.current) ;// clear interval refcurreynt mein set interval ko rok deta hai
           intervalRef.current=null;
             setTime(0); // ye rest krdega

    }


    return (
        <div className="container">
    <div className="stopwatch">
      <h1>⏱ Stopwatch</h1>

      <div className="time">{time}</div>

      <div className="buttons">
        <button className="start" onClick={start}>Start</button>
        <button className="stop" onClick={stop}>Stop</button>
        <button className="reset" onClick={reset}>Reset</button>
      </div>
    </div>
  </div>
      
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Stopwatch />);