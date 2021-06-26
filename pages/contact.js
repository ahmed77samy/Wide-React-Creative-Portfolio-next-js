import SliderContactUs from "../components/sliders/slidercontactus";
import Map from "../components/map/map";
import Contact2 from "../components/contact/contact_2";
import Header from "../components/header/header";

function ContactUs() {
    return (
        <>
            <Header />
            <div className="contact__page">
                <SliderContactUs />
                <Map />
                <Contact2 />
            </div>
        </>
    );
}

export default ContactUs;
