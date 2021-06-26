import SliderMain from "../components/sliders/slidermain";
import Layout from "../components/layout/layout";
import Features from "../components/features/features";
import Purchase from "../components/purchase/purchase";
import Header from "../components/header/header";

export default function Home() {
    return (
        <>
            <Header />
            <div className="home__page">
                <SliderMain />
                <Layout />
                <Features />
                <Purchase />
            </div>
        </>
    );
}
