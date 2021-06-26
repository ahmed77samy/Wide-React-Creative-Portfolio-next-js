import { useEffect, useRef } from "react";
import { onShowAnimation_hide } from "/public/js/OnShowAnimation";

import { features } from "/public/js/features";
import ItemFeatures from "./itemfeatures";

function Features() {
    const titleRef = useRef(null);

    ////////// animation on show //////////
    useEffect(() => {
        onShowAnimation_hide(titleRef.current, "var(--black)");
    }, []);

    return (
        <div className="features setup__component">
            <div className="container">
                <span className="label__2">core Features</span>
                <h2 className="h2__title" ref={titleRef}>
                    What we use
                </h2>
                <div className="row">
                    {features.map((e, i) => {
                        return (
                            <div className="col-6 col-sm-4 col-lg-2" key={i}>
                                <ItemFeatures data={e} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Features;
