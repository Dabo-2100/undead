import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Nav from "./components/Nav";

export default function App() {
  return (
    <div className="col-12">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/shop">
            <Route index element={<h1>Shop Page All Products</h1>} />
            <Route path="laptops"  >
              <Route index element={<h1>laptops Page</h1>} />
              <Route path=":laptopID" element={<h1>LapTop Details</h1>} />
            </Route>
            <Route path="phones" element={<h1>phones Page</h1>} />
            <Route path="pcs" element={<h1>PcsPage</h1>} />
          </Route>
          <Route path="*" element={<h1>Page Not Found | 404</h1>} />
        </Routes>
        <footer> Footer</footer>
      </Router>

    </div>
  )
}