import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
// jitni cheeze change ho rhi hai utne state variable ki zarurat pdegi


function PasswordGenerator() {
    const [Password, setPassword] = useState("");
    const [length, setLength] = useState(5);
    const [Number, setNumber] = useState(false);
    const [Character, setCharacter] = useState(false);


    const generatepassword = useCallback(() => {

        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        if (Number) {
            str += "1234567890"
        }
        if (Character) {
            str += "~!@#$%^&*()-?+-*/"
        }
        let pass = "";
        for (let i = 0; i < length; i++) {// it means how many time loop runs for password
            pass += str[Math.floor(Math.random() * str.length)]

        }
        setPassword(pass);
        // ye iska mtlb ise andar jo funcntion hoga vo jbhi chlega jab iski depdency change hogi

    }, [length, Character, Number])

    useEffect(() => {
        generatepassword();

    }, [Number, Character, length]);//us effect first baar chla but uske baad tabhi chlega jab length change hogi numberchange hoga ya char change hoga


    //generatepassword(); // ye infinte loop ho jayege isile useeffect use karenge

    return (
        <>
            <h1>Password is:{Password}</h1>
            <div>{/*necceh wali value length range wale ko  10 set karegi */}
                <input type="range" min={5} max={50} value={length} onChange={(e) => setLength(e.target.value)}></input>
                <label>length:{length}</label>

                <input type="checkbox" defaultChecked={Number} onChange={() => setNumber(!Number)}></input>
                <label>Number</label>

                <input type="checkbox" defaultChecked={Character} onChange={() => setCharacter(!Character)}></input>
                <label>Character</label>
            </div>
        </>






    )


}





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<PasswordGenerator />)
