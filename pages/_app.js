import Layout from "../layouts/layout";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/components/navigation/navigation.scss";
import "swiper/swiper.scss";
import "/styles/globals.scss";

Router.events.on("routeChangeStart", () => {
    NProgress.start();
    document.querySelector(".loader").classList.remove("d-none");
});
Router.events.on("routeChangeComplete", () => {
    NProgress.done();
    document.querySelector(".loader").classList.add("d-none");
});
Router.events.on("routeChangeError", () => {
    NProgress.done();
    document.querySelector(".loader").classList.add("d-none");
});

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
