
import { useRouteError } from "react-router-dom";
const Error=()=>{
    const err=useRouteError();
    console.log(err);
    return(
        <div>
            <h1>OOps this is an Error🙊🙊</h1>
            <h2>Pls Check Again😁</h2>
            <h3>{err.error.message}</h3>
        </div>
    )
}
export default Error;