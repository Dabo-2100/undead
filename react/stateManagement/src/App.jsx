import { useContext, useState } from "react";
import Modal from "./Modal";
import { useRecoilState } from "recoil";
import { $modalIndex } from "./stroe";
import { ProjectContext } from "./ProjectContext";

export default function App() {
  const [modalIndex, setModalIndex] = useRecoilState($modalIndex);
  const { counter, counter2, incrementCounter2 } = useContext(ProjectContext);
  return (
    <div className="App">
      <h1>Counter From Context is : {counter2}</h1>
      <button onClick={() => incrementCounter2()}>+</button>
      <button onClick={() => setModalIndex(true)} > Open Modal</button>
      {
        modalIndex && <Modal />
      }

    </div >
  )
}
