import { createContext } from "react";
// global context ek object hai jiste andar rohit store kr diya in key value pair aur iss value ko acccess krne ke liye mein use context ka use krta hu
const GlobalContext =createContext("Rohit") //iska mtlb increment global decrement sb iska excess kr skte hain

// create context ke andar hum koi bhi data de skte hai array string anything
export default GlobalContext;