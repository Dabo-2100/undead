import HeroSection from "./components/HeroSection";
import PackagesSection from "./components/PackagesSection";
import "./index.scss";
export default function HomePage() {
    return (
        <div className='col-12' id='HomePage'>
            <h1 style={{ height: "50vh" }}></h1>
            <HeroSection />
            <PackagesSection />
        </div>
    )
}
