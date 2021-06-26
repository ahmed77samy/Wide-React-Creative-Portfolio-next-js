import { useEffect, useRef } from "react";
import { onShowAnimation_showText } from "/public/js/OnShowAnimation";

function SliderAbout() {
    const titleRef = useRef(null);

    ////////// aniamtion on show //////////
    useEffect(() => {
        onShowAnimation_showText(titleRef.current);
    });

    return (
        <div className="sliderabout">
            <div className="row m-0 align-items-center">
                {
                    ////////// slider__content //////////
                }
                <div className="col-12 col-lg-3">
                    <div className="slider__content">
                        <h1 className="text-uppercase" ref={titleRef}>
                            We make strategies,design <br /> development to
                            create <br /> valuable products.
                        </h1>
                    </div>
                </div>
                {
                    ////////// slider__image //////////
                }
                <div className="col-12 col-lg-9 p-0">
                    <div className="slider__image">
                        <img src="/image/backgrounds/2.jpg" alt="about us" />
                        <div className="overlay"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SliderAbout;
