import { useEffect, useRef } from "react";
import {
    onShowAnimation_hide,
    onShowAnimation_image,
    onShowAnimation_showText,
} from "/public/js/OnShowAnimation";

import SocialItem from "./socialitem";
import { clients } from "/public/js/testimonials";

function Testimonials() {
    const part1Ref = useRef(null);
    const part2Ref = useRef(null);
    const part3Ref = useRef(null);
    const descriptionRef = useRef(null);
    const titleRef = useRef(null);

    ////////// animations on show //////////
    useEffect(() => {
        onShowAnimation_showText(descriptionRef.current);
        onShowAnimation_image(part1Ref.current);
        onShowAnimation_image(part2Ref.current);
        onShowAnimation_image(part3Ref.current);
        onShowAnimation_hide(titleRef.current, "var(--black)");
    }, []);

    return (
        <div className="testimonials2 setup__component">
            <div className="container">
                <div className="row align-items-center">
                    {
                        ////////// image__testimonials // parts //////////
                    }
                    <div className="col-12 col-lg-6">
                        <div className="img__parts image__testimonials d-flex">
                            <div className="part" ref={part1Ref}>
                                <div className="animate__img">
                                    <img
                                        className="img-fluid"
                                        src="/image/about/4.jpg"
                                        alt="about wide portfolio"
                                    />
                                </div>
                            </div>
                            {
                                ////////////////////
                            }
                            <div className="part" ref={part2Ref}>
                                <div className="animate__img">
                                    <img
                                        className="img-fluid"
                                        src="/image/about/5.jpg"
                                        alt="about wide portfolio"
                                    />
                                </div>
                            </div>
                            {
                                ////////////////////
                            }
                            <div className="part" ref={part3Ref}>
                                <div className="animate__img">
                                    <img
                                        className="img-fluid"
                                        src="/image/about/6.jpg"
                                        alt="about wide portfolio"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        ////////// details__testimonials //////////
                    }
                    <div className="col-12 col-lg-6 order-1 order-lg-0">
                        <div className="details__testimonials">
                            <div>
                                <span className="label__2">testimonials</span>
                                <h2
                                    className="text-uppercase h2__title"
                                    ref={titleRef}>
                                    our customers
                                </h2>
                                <p
                                    className="write--one m-0"
                                    ref={descriptionRef}>
                                    Our most famous clients talked about us
                                    through their social media accounts and they
                                    praised us a lot. Let's see what some of
                                    them said
                                </p>
                            </div>

                            <SocialItem data={clients} title="facebook" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
