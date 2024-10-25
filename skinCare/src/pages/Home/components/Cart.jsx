import { useContext } from "react"
import { ProjectContext } from "../../../ProjectContext"
import { useNavigate } from "react-router-dom";

export default function Cart() {
    const navigate = useNavigate();
    const { cart, toggleCart, removeFromCart } = useContext(ProjectContext);
    return (
        <div className="col-12" style={{ height: "100vh", position: "fixed", top: 0, background: "#00000070", zIndex: 500 }}
            onClick={toggleCart}
        >
            <div onClick={(event) => { event.stopPropagation() }} className="col-5 bg-white position-absolute end-0 h-100">
                {
                    cart.map((el, index) => {
                        return <h1>{el.product_name}<button className="btn btn-danger" onClick={() => { removeFromCart(el.documentId) }}>del</button></h1>
                    })
                }
                <button className="btn btn-success" onClick={() => { navigate('/cart')}}>Check Out</button>
            </div>
        </div>
    )
}
