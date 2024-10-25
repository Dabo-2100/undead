import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
    const navigate = useNavigate();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        let token = sessionStorage.getItem("token") || localStorage.getItem("token");
        if (token) {
            setChecked(true);
            // Get User Data From His Token
        } else {
            navigate('/');
        }
    }, [])

    const handleLogOut = () => {
        sessionStorage.clear();
        localStorage.clear();
        navigate('/login');
    }
    return (
        <>
            {
                checked && (
                    <div>
                        Profile Page
                        <button onClick={handleLogOut}>Logout</button>
                    </div >
                )
            }
        </>
    )
}
