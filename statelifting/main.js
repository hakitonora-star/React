// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";
// import Increment from "./Increment";
// import Decrement from "./Decrement";
// import GlobalContext from "./global";
// import { useContext } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <h1>Hello Coder </h1>

//       <Increment counts={count} setCounts={setCount} />
//       <Decrement counts={count} setCounts={setCount}/>

    

//     </>
//   );
// }







import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import GlobalContext from "./global";
import Increment from "./Increment";

function App() {
  const [count, setCount] = useState(0);

  return (
    <GlobalContext.Provider value={{ count, setCount }}> {/**hmne global content varibale object me set count aur count daal diya */}
      <h1>Hello Coder</h1>
      <h2>Count is: {count}</h2>

      <Increment />
    </GlobalContext.Provider>
    // {/* increment decrement global context me wrap kiya hua mtlb incremet decrement global ka direct acess mil jayyega
    //  */}
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);


/*

toh teen file 
 COUNT ,SETCOUNT mujhe count aur set count fifth child ko bhejna hai toh first 2 ko pass krega 2 third ko third fourth ko fouth fifith final isko bolte hai props drilling props drilling isliye kyunki count setcount props hain jo first se fifth ko send ho rhe hai 1 se second second se 3 3 se 4 4 se 5 drill ho rhe hai
manlo mein chahta hu 1 se fifth props jaaye but direct jaye without props drillling ye solve hoga by props drilling
tph aaisa krne ke liye mein ek global file bnaunga jisme count set count rkh dunga aur usse direcr 1 aur 5 count access kr skte hai
    FIRST  
     |
   SECOND
     |
   THIRD
     |
    FOURHT

*/