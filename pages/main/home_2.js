import Header from "../../components/header/header"
import Slider2 from "../../components/sliders/slider_2";
import Products from "../../components/products/products";
import Testimonials from "../../components/testimonials/testimonials_2";
import Work2 from "../../components/work/work_2";
import Subscrib from "../../components/subscrib/subscrib";
import Listening from "../../components/listening/listening";
import Clients2 from "../../components/clients/clients_2";
import Blog2 from "../../components/blog/blog_2";
import Contact2 from "../../components/contact/contact_2";

function Home_2() {
    return (
        <>
            <Header />
            <div className="home_2__page">
                <Slider2 />
                <Products />
                <Testimonials />
                <Work2 />
                <Subscrib />
                <Listening />
                <Clients2 />
                <Blog2 />
                <Contact2 />
            </div>
        </>
    );
}

export default Home_2;
