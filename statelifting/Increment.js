// import { useState } from "react";
// export default function Increment({ counts, setCounts }) {
// // export default function Increment() {

//     //  const [counts, setCounts] = useState(0);
//   return (
//     <>
//       <h2>Child count is: {counts}</h2>
//       <button onClick={() => setCounts(counts + 1)}>
//         Increment
//       </button>
//     </>
//   );
// }

// /*
// Parent is main uske 2 child increment and decrement mein chahta hu child 1 mein increment kree kyunki set varibale iisse mein hai mein chta hu increase karu child 1 se aur jab decrease karu child 2 se toh child 1 mein bhi delte ho
// */

import { useContext } from "react";
import GlobalContext from "./global";
import Decrement from "./Decrement";

export default function Increment() {
  const { setCount } = useContext(GlobalContext);

  return (
    <>
      <button onClick={() => setCount(prev => prev + 1)}>
        Increment
      </button>

      <Decrement />
    </>
  );
}