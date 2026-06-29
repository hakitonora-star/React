import React from "react";
import ReactDOM from "react-dom/client"
import Card from "./component/Card"
import Header from "./component/Header"
import Footer from "./component/Footer"
import arr from "./utils/dummy"
import {greet as goa } from "./utils/dummy"
const Root = ReactDOM.createRoot(document.getElementById('root'));
//greet as goa means greet ka rename kar diya goa



// arrray bhi khi aur daalenge utilis name ka folder bna ke
// const arr = [
//   { id: 1, cloth: "Tshirt", offer: "20-40% off", image: "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//   { id: 2, cloth: "Pant", offer: "20-50% off", image: "https://imgs.search.brave.com/cmhjIFyrBIJ_gqHJM96w5ESIgCWXAYsm5WfO142PK9s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90cnVl/d2Vyay5jb20vY2Ru/L3Nob3AvZmlsZXMv/ZWRvX2xpdGVfd2Vy/a3BhbnRzX21lbnNf/bGlnaHRfa2hha2lf/bGF5ZmxhdF8yLmpw/Zz92PTE3NzE2MjM4/NzUmd2lkdGg9MTIw/MA" },
//   { id: 3, cloth: "Skirt", offer: "10-20% off", image: "https://imgs.search.brave.com/xtt5CDcOgy9IaNX_PKAodGhVTWxRL28xjHRG3wkf4e8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zbmlk/ZWwudXMvY2RuL3No/b3AvZmlsZXMvU1dG/UzI1NTA1NV9wXzMy/X0xMLndlYnA_dj0x/NzczNzk5NzQyJndp/ZHRoPTMyMA" },
//   { id: 4, cloth: "Shirt", offer: "5-100% off", image: "https://imgs.search.brave.com/ZpAPRRbjPJXPLB-YFxh9DlybsO0YSguFXV8OxxND4YE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMubGVlLmNvbS9p/cy9pbWFnZS9MZWUv/MTEyMzg5NTA3LUhF/Uk8_JEtEUC1MQVJH/RTIk" },
//   { id: 5, cloth: "Jeans", offer: "30-60% off", image: "https://imgs.search.brave.com/ufCcIGTazj3g7wCo2lcmnXHkN6PbyAVO8w7it4dyXR0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5obS5jb20vYXNz/ZXRzL2htLzhiLzhm/LzhiOGYwOTJkNTkx/NjlmZDQzZWNhODE3/NDIxODYzMWI5MmY4/MTdmMDkuanBn" },
//   { id: 6, cloth: "Jacket", offer: "40-70% off", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//   { id: 7, cloth: "Hoodie", offer: "25-55% off", image: "https://imgs.search.brave.com/tsxPIKlzE2o18FxahPXMflBV8fwMRHWWkztgok_cjBo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzhmL2Iy/L2VkLzhmYjJlZDU3/NmE3NjVjZTQ5OTU4/MThiMGQwYjk4NDY2/LmpwZw" },
//   { id: 8, cloth: "Sweater", offer: "35-65% off", image: "https://imgs.search.brave.com/nBhl6uRGSaIfiWoJoTD_QiUDOsQNFGAe-QBOwXGbeLw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjYv/NDExLzAwMS9zbWFs/bC9tYW4tb3Jhbmdl/LXRyZW5keS1oYXBw/eS1mYXNoaW9uLWJh/Y2tncm91bmQtc3dl/YXRlci1wb3J0cmFp/dC1waG90by5qcGc" },
//   { id: 9, cloth: "Kurta", offer: "15-45% off", image: "https://imgs.search.brave.com/vtEFwPdbybrvNWQl3dHXrXJRYPq7o2tg9np4TInmQx0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pay5p/bWFnZWtpdC5pby80/c2ptb3F0amUva2Fs/a2ktdXNhL3RyOnct/MzcwLGMtYXRfbWF4/L2Nkbi9zaG9wL2Zp/bGVzL3B1cnBsZS1z/aWxrLXByaW50ZWQt/ZGVzaWduZXIta3Vy/dGEtZm9yLW1lbi1z/ZzMyMjY0NC0yLmpw/Zz92PTE3NTczMjMx/Njc" },
//   { id: 10, cloth: "Blazer", offer: "50-80% off", image: "https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
// ];

function App() {

  return (

    <>
      <Header />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center", paddingTop: "50px", paddingLeft: "50px", paddingRight: "50px", backgroundColor: "white" }}>
        {arr.map((value) => ( // ye ek ek array ki value one by one llake dega
          <Card cloth={value.cloth} offer={value.offer} image={value.image} key={value.id} />
        ))}




        {/* <Card cloth="T-shirt" offer="20-80%off"/>
    <Card cloth="T-shirt" offer="10-80%off"/>
    <Card  cloth="T-shirt" offer="10-80%off"/>
    <Card cloth="T-shirt" offer="10-80%off"/>
    <Card cloth="T-shirt" offer="10-80%off"/>
    <Card cloth="T-shirt" offer="50-80%off"/>
    <Card cloth="T-shirt" offer="30-80%off"/>
    <Card cloth="T-shirt" offer="20-80%off"/>
    <Card cloth="T-shirt" offer="50-80%off"/>
    <Card cloth="T-shirt" offer="30-80%off"/>
    <Card cloth="T-shirt" offer="20-80%off"/>
    <Card cloth="T-shirt" offer="30-80%off"/> */}
      </div>

      <div style={{ marginTop: "50px" }}>
        <Footer />
      </div>
    </>


  )
}


//header
// Body
// Footer

Root.render(<App />);
// har function  ko alag file banyange jisse hum bolegnge module
// aur module ke saath component bhi bolenge like koi function ke liye new java script file bna di