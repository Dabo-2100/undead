import { createContext, useState } from "react";

const ProjectContext = createContext();
const ProjectProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const addToCart = (obj) => {
        let oCart = [...cart];
        oCart.push(obj);
        setCart(oCart);
    }
    const removeFromCart = (documentId) => {
        let oCart = [...cart];
        let productIndex = oCart.findIndex(el => el.documentId == documentId);
        oCart.splice(productIndex, 1);
        setCart(oCart);
    }

    const [cartIndex, serCartIndex] = useState(false);
    const toggleCart = () => { serCartIndex(!cartIndex) }
    return (
        <ProjectContext.Provider value={{
            cart, addToCart, removeFromCart,
            cartIndex, toggleCart
        }}>
            {children}
        </ProjectContext.Provider>
    );
}

export { ProjectContext, ProjectProvider }