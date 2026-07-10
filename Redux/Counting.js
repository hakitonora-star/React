import { useDispatch, useSelector } from "react-redux"
import { Increment,Decrement,Reset } from "./Slicer1";
    export default function Counting(){
    const count= useSelector((state)=>state.slice1.count); // use selector global state laake dega 
    const Dispatch = useDispatch();
 
    /*
global state aaise dikhenge
   const state={
   slice1:{
   count:0
   },
   slice2:{
   count:2,
   name:"Rohit"
   
   }
   slice3:{
   login:true,
   }
   
   
   }
   
   */

    return(
        <>
        <h1>Counter is {count}</h1>
        <button onClick={()=>Dispatch(Increment())}>Increment</button>
        <button onClick={()=>Dispatch(Decrement())}>Decrement</button>
        <button onClick={()=>Dispatch(Reset())}>Reset</button>
        
        </>
    )


}