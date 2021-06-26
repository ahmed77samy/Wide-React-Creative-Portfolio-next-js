import Header from "../../components/header/header"
import Slider1 from "../../components/sliders/slider_1";
import Experience from "../../components/experience/experience";
import Testimonials from "../../components/testimonials/testimonials";
import Work from "../../components/work/work";
import Subscrib from "../../components/subscrib/subscrib";
import Meetting from "../../components/meetting/meetting";
import Clients from "../../components/clients/clients";
import Blog from "../../components/blog/blog";
import Contact from "../../components/contact/contact";

function Home_1() {
    return (
        <>
            <Header />
            <div className="home_1__page">
                <Slider1 />
                <Experience />
                <Testimonials />
                <Work />
                <Subscrib />
                <Meetting />
                <Clients />
                <Blog />
                <Contact />
            </div>
        </>
    );
}

export default Home_1;
