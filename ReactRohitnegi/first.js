// attributes={

//    className:"element",
//    id:"first"

// }
// element={
//     tag:"h1",
//     textContent:"hello coder army"
// }\  //<h1 style ;backgroind colour color siz4  ye sab attributes in object form> yha per jo bhi likhte hai vo childrem</h1>
// element[id]=attributes[key]==>id->first and class name=>element
    // means element.classname:element
    // element .id="first"
    // through react
    //REACT :REact jo hai vo ek tarah se object hai
    //REACT DOM :yeh bhi ek tarah ka OBject hi hai

    /*toh main react objectaur react dom object hi js library hai jo hmne bnaya hai
    REact bs ek java script ka object hai
    */
const React = {
  createElement: function (tag, attributes, children) {
    const element = document.createElement(tag);
    if(typeof children === "object"){
        for(let val of children){
            element.append(val);

        }

    }
    else{
    element.textContent = children;
    }
    for (let key in attributes) {
      element[key] = attributes[key];
    }
    return element;
  },
};
const ReactDom={
    render:function(element,root){
        root.append(element);
    }
}
const header1 = React.createElement("h1",{className: "element", id: "first" },"Hello Coder Army",);
const header2 = React.createElement("h2",{className: "element", id: "first" },"Kaise ho aap log",);

const li1=React.createElement("li",{},"HTML");
const li2=React.createElement("li",{},"CSS");
const li3=React.createElement("li",{},"JAVA SCRIPT");


const ul=React.createElement("ul",{fontsize:"30px",backgroundColor:"blue",color:"white"},[li1,li2,li3]);

// unordered list
// HTML
// CSS
// JAVA SCRIPT


ReactDom.render(header1, document.getElementById("root"));
ReactDom.render(header2, document.getElementById("root"));
ReactDom.render(ul, document.getElementById("root"));
   
/*
Through java script
// const root=document.getElementById("root")
// // we also want ki dom ko mein khud se na karu means root.append
// root.append(header1); // this is a dom manipulation
// root.append(header2); // this is also dom manipulation


// const element1=document.createElement("h1");
// element1.textContent="hello coder army";
// element1.id="element 1";
// element1.style.fontSize="30px";
// element1.style.backgroundColor="orange"

// const main=document.getElementById('root');
// main.append(element1);

// const element2=document.createElement("h2");
// element2.textContent="Strike is coming";
// element2.id="element 1";
// element2.style.fontSize="30px";
// element2.style.backgroundColor="pink"
// main.append(element2);
*/