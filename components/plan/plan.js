import { useEffect, useRef } from "react";
import {
    onShowAnimation_hide,
    onShowAnimation_image,
} from "/public/js/OnShowAnimation";

import BreakPoint from "./breakpoint";
import { breakpoint } from "/public/js/about";

function Plan() {
    const titleRef = useRef(null);
    const title2Ref = useRef(null);
    const part1Ref = useRef(null);
    const part2Ref = useRef(null);
    const part3Ref = useRef(null);

    ////////// aniamtion on show //////////
    useEffect(() => {
        onShowAnimation_hide(titleRef.current, "var(--black)");
        onShowAnimation_hide(title2Ref.current);
        onShowAnimation_image(part1Ref.current);
        onShowAnimation_image(part2Ref.current);
        onShowAnimation_image(part3Ref.current);
    }, []);

    return (
        <div className="plan setup__component">
            <div className="container">
                <div className="row align-items-center">
                    {
                        ////////// details__plan //////////
                    }
                    <div className="col-12 col-lg-6">
                        <div className="details__plan">
                            <span className="label__2">why choose us</span>
                            <h2 className="h2__title" ref={titleRef}>
                                About us .
                            </h2>
                            <h3
                                className="text-uppercase h3__title"
                                ref={title2Ref}>
                                We have been doing projects since 2012.
                            </h3>
                            <div className="points__plan">
                                {breakpoint.map((e, i) => {
                                    return (
                                        <div key={i}>
                                            <BreakPoint data={e} />
                                            {i !== breakpoint.length - 1 && (
                                                <div className="hr__1"></div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    {
                        ////////// image__plan //////////
                    }
                    <div className="col-12 col-lg-6">
                        <div className="img__parts image__plan d-flex">
                            <div className="part" ref={part1Ref}>
                                <div className="animate__img">
                                    <img
                                        className="img-fluid"
                                        src={"/image/about/1.jpg"}
                                        alt="about wide portfolio"
                                    />
                                </div>
                            </div>
                            <div className="part" ref={part2Ref}>
                                <div className="animate__img">
                                    <img
                                        className="img-fluid"
                                        src={"/image/about/2.jpg"}
                                        alt="about wide portfolio"
                                    />
                                </div>
                            </div>
                            <div className="part" ref={part3Ref}>
                                <div className="animate__img">
                                    <img
                                        className="img-fluid"
                                        src={"/image/about/3.jpg"}
                                        alt="about wide portfolio"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Plan;
