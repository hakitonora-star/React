import { useEffect, useState } from "react";

function Body() {
        // profile=[] ye sirf example ke liye hai
    const [Profile, setProfile] = useState([]);
    const [numberofProfile,setnumberofProfile]=useState("");



    async function GenerateProfile(count) {
       const ran= Math.floor(1+Math.random()*10000)
      
        const response = await fetch(`https://api.github.com/users?since=${ran}&per_page=${count}`);
        const data = await response.json();
      
       
        // lt us assume no  set profile profile=data
        setProfile(data); // set profile isliye kiya ki jaise hi data  change hoga ye hmko vo data screen per dikha dega


    }
    useEffect(() => {
        GenerateProfile();

    }, [])





    return (
        <div className="but">
            <input type="text" className="inpu" placeholder="search here" value={numberofProfile}  onChange={(e)=>setnumberofProfile(e.target.value)}></input>
            <button onClick={()=>GenerateProfile(Number(numberofProfile))}>Search Profile</button>

        <div className="profile">

            { // curly bracket pe map ilsiye likha kyunki js ka code react mein baracket me likhte
                Profile.map((value) => ( // yeh bracket for return
                    <div key={value.id} className="cards">
                        <img src={value.avatar_url} alt={value.login} />
                        <h2>{value.login}</h2>
                        <a href={value.html_url} target="_blank" rel="noopener noreferrer" style={{color:"white"}}>
                            Profile
                        </a>
                    </div>
                ))
            }

        </div>
            </div>


    )
}



export default Body;