import { Link,Outlet } from "react-router"
export default function Details(){

    return (
        <>
        <nav>
            <Link to="/Details">Details</Link>
            <Link to="Hello">Hello</Link>
            <Link to="hi">Hi</Link>

        </nav>
       
        <Outlet></Outlet>

        </>
    )

}