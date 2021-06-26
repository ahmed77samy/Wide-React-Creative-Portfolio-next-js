import { useEffect, useRef } from "react";

import ExperienceItem from "./item";
import { productItem } from "/public/js/experience";
import {
    onShowAnimation_hide,
    onShowAnimation_showText,
} from "/public/js/OnShowAnimation";

function Experience() {
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);

    ////////// animation on show //////////
    useEffect(() => {
        onShowAnimation_hide(titleRef.current, "var(--black)");
        onShowAnimation_showText(descriptionRef.current);
    }, []);

    return (
        <div className="experience setup__component">
            <div className="container">
                <div className="row">
                    {
                        ////////// experience__title //////////
                    }
                    <div className="col-12 col-lg-6">
                        <div className="experience__title">
                            <span className="label__2">About Company</span>
                            <h2 className="h2__title" ref={titleRef}>
                                digital experience
                            </h2>
                            <p className="m-0" ref={descriptionRef}>
                                Lorem ipsum dolor sit amet consectetur
                                adipiscing elit do eiusmod tempor incididunt ut
                                labore et dolore magna ut enim.
                            </p>
                        </div>
                    </div>
                    {
                        ////////// loop on experience__item //////////
                    }
                    {productItem.map((e, i) => {
                        return (
                            <div className="col-12 col-md-6 col-lg-3" key={i}>
                                <ExperienceItem data={e} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Experience;
