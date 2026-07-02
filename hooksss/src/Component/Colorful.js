
import {useEffect,useState} from "react";

function Colorful(){
      const [color,setColor]=useState("black");
    //   document.body.style.backgroundColor=color; // ye hum isliye nhi karenge kyunki hum isse dom ko directly manipulate karrha hai jo react ka main fundamental rule break karrha hai react dom maniuplation user ko nhi karne deta khud karta hai  kyunki user mistake kar skta hai
       useEffect(()=>{ // use Effect  hmesha sbse last me chlta hai jab sab kuch execute hojaeyga tab chlta hai use effect
            document.body.style.backgroundColor=color
            },[color]) // jo ye neche color likha hai []bracket mein ye dependency hai 
            // agar ye array khali toh means ye use effect wala function
            //  kbhi nhi chlega agar yha color likh hai mtlb ye jbh clega jab
            //  color change hoga ye hi hai dendency ji bracket ke andar hoga function 
            // jbhi clhage ajab vo chnage hoga
   
    return(
        <>
        <h1>Background Color Changer</h1>
        <div className="but">
            <button style={{backgroundColor:"red"}} onClick={()=>{setColor("red")}}>Red</button>
            <button style={{backgroundColor:"blue"}}onClick={()=>{setColor("blue")}}>Blue</button>
            <button style={{backgroundColor:"pink"}}onClick={()=>{setColor("pink")}}>Pink</button>
            <button style={{backgroundColor:"green"}}onClick={()=>{setColor("green")}}>Green</button>  
            <button style={{backgroundColor:"orange"}}onClick={()=>{setColor("orange")}}>Orange</button>

        </div>
        
        
        </>

    )

}
export default  React.memo(Colorful); // isse hum ye bol rhe hai isko koi nhi chalna  jab tak mein colorful mein button nhi click karrha manlo ye colorful fucntion kisi aur fucntion me hain aggar vo fucntion call ho rha hai to ye automatical call hoga jo wrong hai toh call memo isko hone se rokega

// use memo jab bhi call hone dega jab props jo udhar function call se bheje hai vo different hai