
// import { use, useEffect, useState } from "react";
// import { useParams, useSearchParams } from "react-router"
import useFetch from "./useFetch";
 export default function Github(){
    const Profile=useFetch();
    //neeche wala code kaafi busy keech peech hai toh hum isko new file me likh denge aur import kra lenege yhi hota hai custom hook
    // seedha use

    // const {name}=useParams(); // jo hum name /name denge  gitub ke baaad ye usko catch krlega as object aur bracket lgane ne se uska name hme mil jayea
    // // Example-->http://localhost:1234/Github/Nakul
    // const [Profile,setProfile]=useState(null)

    // async function fetchUser() {
    //     const response=await fetch(`https://api.github.com/users/${name}`);
    //     const data=await response.json();
    //     setProfile(data);


    // }
    // useEffect(()=>{
    //     fetchUser();

    // },[name]);

   

 


    return(
        <>
        <h1>My Github Profile</h1>
    <img src={Profile?.avatar_url}></img> {/**if name doesnot exist  thats why we use ? wuestion mark*/}
        <h2>{Profile?.login}</h2>
        </>
    )
}

