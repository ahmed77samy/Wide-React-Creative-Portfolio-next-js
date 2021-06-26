import Link from "next/link";
import navitem from "/public/js/navbar";

function Footer() {
    return (
        <>
            <footer className="footer setup__component">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-3">
                            {
                                ////////// footer__details //////////
                            }
                            <div className="footer__details">
                                <h3 className="text-uppercase">wide</h3>
                                <p className="text-capitalize">
                                    We support programs that create advancement
                                    opportunities for people.
                                </p>
                                <div className="sp__social">
                                    <a
                                        href="https://www.facebook.com/"
                                        className="reset--style">
                                        fb{" "}
                                    </a>
                                    <a
                                        href="https://twitter.com/"
                                        className="reset--style">
                                        tw{" "}
                                    </a>
                                    <a
                                        href="https://www.instagram.com/"
                                        className="reset--style">
                                        ln{" "}
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            {
                                ////////// footer__links //////////
                            }
                            <div className="footer__links">
                                <h3 className="text-uppercase">links</h3>
                                <ul className="list-unstyled">
                                    {navitem.map((e, i) => {
                                        return (
                                            <li key={i}>
                                                <Link href={e.target}> 
                                                    <a className="reset--style text-uppercase">{e.title}</a>
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            {
                                ////////// footer__contact //////////
                            }
                            <div className="footer__contact">
                                <h3 className="text-uppercase">contact</h3>
                                <p className="text-capitalize">
                                    <span className="text-uppercase label font--one">
                                        t{" "}
                                    </span>{" "}
                                    : <span>01275323124</span>
                                </p>
                                <p className="text-capitalize">
                                    <span className="text-uppercase label font--one">
                                        f{" "}
                                    </span>{" "}
                                    : <span>+001 225 3351</span>
                                </p>
                                <p className="text-capitalize">
                                    <span className="text-uppercase label font--one">
                                        e{" "}
                                    </span>{" "}
                                    : <span>info@ahmed77samy.com</span>
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            {
                                ////////// footer__address //////////
                            }
                            <div className="footer__address">
                                <h3 className="text-uppercase">address</h3>
                                <p className="text-capitalize">
                                    18 elhosary st.
                                </p>
                                <p className="text-capitalize">
                                    kafr el dawar el behiera.
                                </p>
                                <p className="text-capitalize">Egypt.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {
                ////////// copy__right //////////
            }
            <div className="copy__right">
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <p className="m-0 text-uppercase">
                            © 2020 wide creative portfolio Designed by{" "}
                            <span>ahed77samy</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
