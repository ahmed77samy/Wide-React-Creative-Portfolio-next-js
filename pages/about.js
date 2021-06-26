import SliderAbout from "../components/sliders/sliderabout";
import Experience from "../components/experience/experience";
import Plan from "../components/plan/plan";
import Testimonials from "../components/testimonials/testimonials";
import Team from "../components/team/team";
import Clients2 from "../components/clients/clients_2";
import Header from "../components/header/header";

function About() {
    return (
        <>
            <Header />
            <div className="about__page">
                <SliderAbout />
                <Experience />
                <Plan />
                <Testimonials />
                <Team />
                <Clients2 />
            </div>
        </>
    );
}

export default About;
