import { Link, useNavigate } from "react-router-dom";
export default function ProductCard(props) {

    const navigate = useNavigate();
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={props.image} style={{ width: "100%", height: "18rem", objectFit: "contain" }} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">price : {props.price}</p>
                {props.showCat ? <p>Cat is Here</p> : null}
                {/* {props.showCat && (<p>Cat is Here</p>) } */}
                <button className="btn btn-primary" onClick={() => navigate(`product/${props.id}`)}>Show Details</button>
                {/* <Link to={`product/${props.id}`}>Show Details</Link> */}
                {/* <a href="/product/" className="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>
    )
}
