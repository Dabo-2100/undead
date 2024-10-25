import axios from "axios";
import { useEffect, useRef } from "react";
import bcrypt from 'bcryptjs';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const emailInput = useRef();
    const passInput = useRef();
    const navigate = useNavigate();

    const makePasswordHash = async (pass) => {
        let final = "1234";
        const salt = await bcrypt.genSalt(10);
        await bcrypt.hash(pass, salt).then((res) => {
            final = res;
        });
        return final;
    }
    useEffect(() => {
        let token = sessionStorage.getItem("token") || localStorage.getItem("token");
        if (token) {
            navigate("/profile");
        }
        // makePasswordHash("admin").then((res) => {
        //     console.log(res);
        // })
    }, [])


    const handleSubmit = (event) => {
        event.preventDefault();
        axios.get("http://localhost:1337/api/app-users", {
            params: {
                filters: {
                    user_email: {
                        $eq: emailInput.current.value,
                    }
                }
            }
        }).then((res) => {
            if (res.data.data.length == 0) {
                alert('UserName or password is Wrong');
            } else {
                let userInfo = res.data.data[0];
                let hashPassword = res.data.data[0].user_password;
                let match = bcrypt.compare(passInput.current.value, hashPassword);
                match.then((res) => {
                    if (res == true) {
                        Swal.fire({
                            icon: "success",
                            text: "Correct Login",
                            timer: 800
                        }).then(() => {
                            let token = userInfo.documentId;
                            sessionStorage.setItem("token", token);
                            navigate("/profile")
                            console.log(token);
                        })
                        console.log("PAssword Match")
                    } else {
                        Swal.fire({
                            icon: "error",
                            text: "Wron email or password",
                            timer: 800
                        })
                    }
                })
                // console.log(hashPassword);
                // comparePassword()
            }
        })
    }

    return (
        <div className="col-12 pt-5">
            <form className="col-5" onSubmit={handleSubmit}>
                <input ref={emailInput} type="text" placeholder="Enter you email" />
                <input ref={passInput} type="text" placeholder="Enter your password" />
                <button className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}
