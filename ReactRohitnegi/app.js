// react.createElement(tag, attributes, children)

const element=React.createElement("h1",{id:"first",className:"rahul",style:{backgroundColor:"blue" ,fontSize:"30px",color:"yellow"}},"Hello coder army");
const element2=React.createElement("h2",{id:"second",className:"rahul",style:{backgroundColor:"blue" ,fontSize:"30px",color:"yellow"}},"mazza aayya");
const dev1=React.createElement("div",{},[element,element2]);

// ReactDOM.render(element,document.getElementById('root')); this is old method to add element in root 
// element:50 card pde hue hai
const Reactroot=ReactDOM.createRoot(document.getElementById('root')); //pehle root ko bnaya phir neeche append kiya
 Reactroot.render(dev1)

// Reactroot container pehle method me root ka control react ke pass
// nhi hota tha jab manlo 50 card ko webite pe show krna hai toh pehle 
// shoe kreyga uss beech koi aur cheez nhi ho skti thi
// but react ka root pe control lene se react chche toh manlo 50 card show krne hai screen per
// one by one show ho rhe hai 10 show hogye 40 bcche hai  tabhi kuch aur task aagya 
// toh ye card ko show krna stop krdega aur vo task krne  :
// very very important CDN
// Reactroot.render(element);
// Reactroot.render(element2);
//jab bhi mein kisi element ko render karunga toh uske previous element delete hojaymge new element dlne se pehle root mein
// toh element one ke uper hi ye screen per aajaeyga react pe ek uper ek element aajaat hau


//  <div>
//     <h1>hello coder army</h1>
//     <h2>maja ayaa mujhe</h2>
// </div> 
