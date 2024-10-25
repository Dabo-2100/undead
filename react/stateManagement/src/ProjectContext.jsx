import { createContext, useState } from "react";

const ProjectContext = createContext();
const ProjectProvider = ({ children }) => {
    const [counter, setCounter] = useState(100);
    const [counter1, setCounter1] = useState(100);
    const [counter2, setCounter2] = useState(500);
    const [counter3, setCounter3] = useState(100);

    const incrementCounter2 = () => {
        setCounter2(counter2 + 50);
    }
    return (
        <ProjectContext.Provider value={{
            counter, counter2, incrementCounter2
        }}>
            {children}
        </ProjectContext.Provider>
    )

}
export { ProjectContext, ProjectProvider }