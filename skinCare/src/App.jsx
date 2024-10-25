import { faCartShopping, faHouse, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import { useContext, useEffect } from "react";
import { ProjectContext } from "./ProjectContext";
import Cart from "./pages/Home/components/Cart";
import bcrypt from 'bcryptjs';
import LoginPage from "./pages/Login";
import ProfilePage from "./pages/Profile";

export default function App() {
    const makePasswordHash = async (pass) => {
        let final = "1234";
        const salt = await bcrypt.genSalt(10);
        await bcrypt.hash(pass, salt).then((res) => {
            final = res;
            // console.log(res)
        });
        return final;
    }

    const comparePassword = async (pass, hashPass) => {
        // await makePasswordHash("Admin@123").then((res) => { x = res });
        let match = bcrypt.compare(pass, hashPass);
        match.then((res) => {
            if (res == true) {
                console.log("PAssword Match")
            } else {
                console.log("Password is not match")
            }
        })
        console.log(match);
    }

    const { cart, toggleCart, cartIndex } = useContext(ProjectContext);
    return (
        <div className="col-12 App">
            {/* <div className="col-12 bg-danger position-fixed top-0 z-3">
                <FontAwesomeIcon icon={faCartShopping} onClick={() => { toggleCart() }} />
                <span>{cart.length}</span>
            </div> */}

            <BrowserRouter>
                {cartIndex && <Cart />}
                <Routes>
                    <Route path="/">
                        <Route index element={<HomePage />} />
                        <Route path="cart" element={<h1>Cart Page</h1>} />
                        <Route path="login" element={<LoginPage />} />
                        <Route path="register" element={<h1>Register Page</h1>} />
                        <Route path="profile" element={<ProfilePage />} />
                        <Route path="*" element={<h1>404 Page</h1>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
