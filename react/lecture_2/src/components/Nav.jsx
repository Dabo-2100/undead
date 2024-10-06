import { Link } from "react-router-dom";


export default function Nav() {
    return (
        <div>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/blog"}>Blog</Link>
            <Link to={"/shop"}>Shop</Link>

        </div>
    )
}
