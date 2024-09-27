import { useRef, useState } from "react"

export default function App() {
  const input = useRef();

  const [colors, setColors] = useState(["red", "blue", "green", "Blue"])
  return (
    <div>
      <input ref={input}/>
      <button onClick={() => {
        let oColors = [...colors];
        oColors.push(input.current.value);
        setColors(oColors);
      }}>Add Color</button>
      <ul>
        {
          colors.map((el, index) => {
            return <li key={index}>{el}</li>
          })
        }
      </ul>
    </div>
  )
}
