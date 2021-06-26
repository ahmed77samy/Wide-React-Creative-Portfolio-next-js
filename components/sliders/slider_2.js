import { FaArrowRight, FaChevronDown } from "react-icons/fa";
import Link from "next/link";

import { slider2 } from "/public/js/slider";

function Slider2() {
    return (
        <div className="slider2">
            {
                ////////// video //////////
            }
            <video muted={true} autoPlay loop>
                <source
                    src={`/image/banner/${slider2.video}`}
                    type="video/mp4"
                />
                Sorry, your browser doesn't support embedded videos.
            </video>
            {
                ////////// overlay //////////
            }
            <div className="overlay">
                <div className="container">
                    <div className="slider__content">
                        {
                            ////////// content_title //////////
                        }
                        <div className="content__title text-center">
                            <h1 className="text-uppercase m-0 display-1">
                                Crafting Digital
                                <br />
                                Experiences
                            </h1>
                        </div>
                        {
                            ////////// button__1 //////////
                        }
                        <Link href="/slider/video">
                            <a className="button__1 mx-auto reset--style">
                                <span className="before__btn">
                                    <FaArrowRight />
                                </span>
                                <span className="txt__btn text-capitalize">
                                    discover work
                                </span>
                            </a>
                        </Link>
                        {
                            ////////// sp__social //////////
                        }
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
                        {
                            ////////// button__scroll //////////
                        }
                        <button
                            className="button__scroll d-none d-sm-block"
                            onClick={() => {
                                window.scrollTo({
                                    top: window.innerHeight,
                                    behavior: "smooth",
                                });
                            }}>
                            <p className="sp__container">
                                <span className="show">scroll'down</span>
                                <span className="hide">scroll'down</span>
                            </p>
                            <span>
                                <FaChevronDown />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider2;
