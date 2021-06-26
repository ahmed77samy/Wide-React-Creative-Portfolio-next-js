import Head from "next/head";
import Footer from "../components/footer/footer";
import Loader from "../components/loader/loader";

function Layout({ children }) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="description"
                    content="wide react creative portfolio"
                />
                <meta
                    name="keyword"
                    content="portfolio, agency, wide, business, corporate, creative, freelancer, interior, joomla template, K2 Blog, minimal, modern, multipurpose, personal, creative, responsive, simple"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <title>wide react creative portfolio</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="/css/normaliz.min.css" />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=ABeeZee&family=Fira+Sans+Condensed&display=swap"
                />
            </Head>
            <Loader />
            {children}
            <Footer />
        </>
    );
}

export default Layout;
