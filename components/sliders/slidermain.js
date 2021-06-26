import { FaArrowRight } from "react-icons/fa";

function SliderMain() {
    return (
        <div className="banner">
            <div className="overlay"></div>
            <div className="banner__content h-100">
                {
                    ////////// banner__title //////////
                }
                <div className="banner__title">
                    <h1 className="display-2">wide portfolio</h1>
                    <button className="button__1">
                        <span className="before__btn">
                            <FaArrowRight />
                        </span>
                        <span className="txt__btn reset--style text-capitalize">
                            purchase now
                        </span>
                    </button>
                </div>
                {
                    ////////// sp__social //////////
                }
                <div className="sp__social horizontal">
                    <a
                        href="https://www.facebook.com/"
                        className="reset--style">
                        fb{" "}
                    </a>
                    <a href="https://twitter.com/" className="reset--style">
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
    );
}

export default SliderMain;
