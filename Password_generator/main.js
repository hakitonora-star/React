import React,{useEffect,useState}from "react";
import ReactDOM from "react-dom/client";
// jitni cheeze change ho rhi hai utne state variable ki zarurat pdegi

function PasswordGenerator(){

    const[Password,setPassword]=useState("");
    const[length,setLength]=useState(10);
    const[numberChanged,setnumberChanged]=useState(false);
    const[charChanged,setcharChanged]=useState(false);

    function generatepassword(){
        let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(numberChanged){
            str+="0123456789"
        }
        if(charChanged){
            str+="+-*/#@$%^&*!~?";
        }
        let pass=""
        for(let i=0;i<length;i++){// it means how many time loop runs for password
            pass+=str[Math.floor(Math.random()*str.length)]
        }
        setPassword(pass);

    }
    
    useEffect(()=>{
        generatepassword();

    },[length,numberChanged,charChanged]) //us effect first baar chla but uske baad tabhi chlega jab length change hogi numberchange hoga ya char change hoga

    

//generatepassword(); // ye infinte loop ho jayege isile useeffect use karenge



    return(
        <>

        <h1>Password is {Password}</h1>
        <div className="second">{/*necceh wali value length range wale ko  10 set karegi */}
            <input type="range" min={5} max={50} value={length} onChange={(e)=>setLength(e.target.value)}></input>
            <label>Length is:{length}</label>

            <input type="checkbox" defaultChecked={numberChanged}  onChange={() => setnumberChanged(!numberChanged)} ></input>
            <label>Number</label>

                <input type="checkbox" defaultChecked={charChanged}  onChange={() => setcharChanged(!charChanged)}></input>
            <label>Character</label>


        </div>
        
        
        
        
        </>


    )

}



const root =ReactDOM.createRoot(document.getElementById('root'));
root.render(<PasswordGenerator/>)
