import React from "react";
import ReactDOM from "react-dom/client";

// const element=React.createElement("h1",{id:"first",className:"rahul",style:{backgroundColor:"blue" ,fontSize:"30px",color:"yellow"}},"Hello coder army");
// const element2=React.createElement("h2",{id:"second",className:"rahul",style:{backgroundColor:"blue" ,fontSize:"30px",color:"yellow"}},"mazza aayya");
// React.createElement=>react element (JSObject)=>ye hme  html laake deta hai in object form ab is object mein j hotml key value pair mein prsent hai usko render real html me convert kar dega
// const dev1=React.createElement("div",{},[element,element2]);

const newelement=<h1>Hello coder army</h1>; // ye html nhi JSX ka code hai
const Reactroot=ReactDOM.createRoot(document.getElementById('root')); //pehle root ko bnaya phir neeche append kiya

Reactroot.render(newelement);

//  JSX :Java script Xml:html code direct js ke andar likh skte hai it is not a part of react
// jsx html nhi hai ye html like hai 
// babel it is present in parcel babel 
// jo bhi JSX ka code hoga first react .create element mein convert hoga isko convert babel karega phir bsss create elemtn ho jayega aur usse hum render kr denge\
// Babel-->  JSX =>React.createElement()=> =>react element (JSObject)=>HTML Element

// Babel convert this code =><h1>Hello coder army</h1> to this code =>React.createElement("h1",{},"Hello coder army");
