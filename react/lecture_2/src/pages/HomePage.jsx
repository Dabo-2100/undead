import { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import Nav from "../components/Nav";

export default function HomePage() {
    const [counter, setCounter] = useState(0);

    const sayHello = () => {
        console.log('Hello')
    }

    // useEffect(() => {
    //     // setCounter(100);
    // }, [])

    useEffect(() => {
        if (counter != 0) {
            console.log("Send Email")

        }
    }, [counter])
    return (
        <div className="col-12 HomePage">
            <h1>Counter is : {counter}</h1>
            <button onClick={() => setCounter(counter + 1)}> +</button>
        </div>
    )
}
