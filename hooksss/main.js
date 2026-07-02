import react from "react";
import {useEffect,useState} from "react";
import ReactDOM from "react-dom/client";
import Colorful from "./src/Component/Colorful.js";

/*
   useffect(Callback Function,dependency)
        useEffect(()=>{


            
            },[])
   
    // background colour changer
   //  const [state, setState] = useState(initialValue);  ye ek array banate hai jisme state and use state prsent hoti hai
   // use state is initial value 
   // new variable hai jisme intial value aayegi setstate fucntion hai 
   // jo fucntion call krta hai apna wala jab intial value of state varible change hoti hai
   // jo new value hai vo ab use sate ke andar or color ke andar ajayega
   // hmne bola tha  ki setState function jabhi call krega jab state ki value change hogi
   //exaplme neeche set color jbhi change hoga jab color ki value change hogi
   // let assume hmne red button per click kiya toh color black se red hua value
   //  change hui toh set color dobara  function ko call krdega 
   // manlo red value phle se thi hmne phir bhi red button ko call maaara
   // toh value change nhi hui tab bhi setState function call krega hi
   // ek barr hi krega 
   // but jo varibale refrence waale hai like array object unko jabhi call krega jab state change hoga isko baylout bolte hai
   // */

 function Main(){
//       const [color,setColor]=useState("black");
//     //   document.body.style.backgroundColor=color; // ye hum isliye nhi karenge kyunki hum isse dom ko directly manipulate karrha hai jo react ka main fundamental rule break karrha hai react dom maniuplation user ko nhi karne deta khud karta hai  kyunki user mistake kar skta hai
//        useEffect(()=>{ // use Effect  hmesha sbse last me chlta hai jab sab kuch execute hojaeyga tab chlta hai use effect
//             document.body.style.backgroundColor=color
//             },[color]) // jo ye neche color likha hai []bracket mein ye dependency hai 
//             // agar ye array khali toh means ye use effect wala function
//             //  kbhi nhi chlega agar yha color likh hai mtlb ye jbh clega jab
//             //  color change hoga ye hi hai dendency ji bracket ke andar hoga function 
//             // jbhi clhage ajab vo chnage hoga
   const [count,setCount]=useState(0);
    return(
        <>
        <div className="counter">
        <h1>Counter is:{count}</h1>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
        </div>
            <Colorful/> 
            {/*hum chahte hai ki colouful na chle jab count ko call ho
            */}


        {/* <h1>Background Color Changer</h1>
        <div className="but">
            <button style={{backgroundColor:"red"}} onClick={()=>{setColor("red")}}>Red</button>
            <button style={{backgroundColor:"blue"}}onClick={()=>{setColor("blue")}}>Blue</button>
            <button style={{backgroundColor:"pink"}}onClick={()=>{setColor("pink")}}>Pink</button>
            <button style={{backgroundColor:"green"}}onClick={()=>{setColor("green")}}>Green</button>  
            <button style={{backgroundColor:"orange"}}onClick={()=>{setColor("orange")}}>Orange</button>

        </div> */}
        
        
        </>

    );

}


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main/>);