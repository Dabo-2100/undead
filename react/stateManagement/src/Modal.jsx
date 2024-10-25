import { useRecoilState } from "recoil";
import "./Modal.css";
import { $modalIndex } from "./stroe";
export default function Modal() {
    const [modalIndex, setModalIndex] = useRecoilState($modalIndex);
    return (
        <div className='Modal' onClick={() => setModalIndex(false)}>
            <div className='modalContent' onClick={(event) => event.stopPropagation()}>
                <h1>This is Content</h1>
            </div>
        </div>
    )
}
