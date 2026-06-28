import React from "react";
import ReactDOM from "react-dom/client";
// jsk me java script ke expression ko use kar skte hai
const names="Rohit";
const obj={
    age:13,
    salary:50,
}

// money maine apne marzi ka attrivute bnaya aur usme 23 string nhi number diya
// { } curly braces mtlb andar hum js ka code likhne wale hai
// style attribute ek tarik se object bhejta hai
// example
/*
const style={
background color:"black",
color:"pink",
fontsize:"30px",
style attribute want object

    <h2 style={{
background color:"black",
color:"pink",
fontsize:"30px"}}>dil lena dil lana{obj.age}</h2>  style attribute expect ki object denge hum
}
*/
const obj2 = {
  backgroundColor: "black",
  color: "blue",
  fontSize: "30px",
};
// jo neeche bnaya isse hum bolte hai React ELEMENT
const newelement = (// toh div ko htaane ke liye hum yh empty de denge
   <>
    <h1 id="first" className="second">Sauda khara kharaa{names} </h1>
    <h2 money={23} style={obj2}>dil lena dil lana{obj.age}</h2> 
    {/* <h2 style= { {backgroundColor: "black",color: "pink",fontSize: "30px",}}>dil lena dil lana{obj.age}</h2>  */}
    </>
); 

const Reactroot = ReactDOM.createRoot(document.getElementById("root"));

Reactroot.render(newelement);


/* 
React Component
1:Class Based Component ye pehle use hota tha too ye nhi likhenge
2:Function Based Component mtlb  react mein function kaise likhenge
means function me kuch return karr rhe hai like maine neeche jsk return kiya
means fucntion element creaate krrehe hai mere liye
function greet(){
    return <h1>Aur Bhai Kaisa hai</h1>

};
function meet(){
    return <h1>Aur Bhai Kaisa hai</h1>

};
Reactroot.render(<>{greet()} {meet()} </>); dono meet greet print ho jayenge screen per
// most important jSX me jab bhi java script daalnege toh curly bracket use jarur karenge

const functionComponent=greet();
const functionComponent2=meet();
const newElement4=<>{functionComponent}{functionComponent2}</>
Reactroot.render(newElement4);

we can also write
Reactroot.render(functionComponent);
Reactroot.render(greet()); // direct calling kar di greet kisi variable me store nhi kiya


*/
