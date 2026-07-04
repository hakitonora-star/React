// import { useState } from "react";

// export default function Decrement({ counts, setCounts }) {
// // export default function Decrement() {

//   return (
//     <>
//       {/* <h2>Child count is: {counts*2}</h2> */}
//       <button onClick={ ()=> setCounts(counts -1)} >
//         Decrement
//       </button>
//     </>
//   );
// }
import { useContext } from "react";
import GlobalContext from "./global";

export default function Decrement() {
  const { setCount } = useContext(GlobalContext);

  return (
    <>
      <button onClick={() => setCount(prev => prev - 1)}>
        Decrement
      </button>
    </>
  );
}