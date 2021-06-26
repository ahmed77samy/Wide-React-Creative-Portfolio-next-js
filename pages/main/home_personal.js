import Header from "../../components/header/header"
import Slider3 from "../../components/sliders/slider_3";
import Experience2 from "../../components/experience/experience_2";
import Work3 from "../../components/work/work_3";
import AboutMe from "../../components/about/aboutme";
import Contact from "../../components/contact/contact";

function Personal() {
    return (
        <>
            <Header />
            <div className="personal__page">
                <Slider3 />
                <Experience2 />
                <Work3 />
                <AboutMe />
                <Contact />
            </div>
        </>
    );
}

export default Personal;
