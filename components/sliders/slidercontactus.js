import { useEffect, useRef } from "react";
import {
    onShowAnimation_hide,
    onShowAnimation_Writer,
} from "/public/js/OnShowAnimation";
import SplitText from "/public/js/SplitText";

function SliderContactUs() {
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);

    ////////// aniamtion on show //////////
    useEffect(() => {
        const spliter = new SplitText(descriptionRef.current);
        spliter.split();

        onShowAnimation_hide(titleRef.current, "var(--black)");
        onShowAnimation_Writer(descriptionRef.current, spliter);
    }, []);

    return (
        <div className="slidercontactus setup__component">
            <div className="container">
                {
                    ////////// slider__title //////////
                }
                <div className="slider__title">
                    <h1 className="h2__title" ref={titleRef}>
                        ready to get started ?
                    </h1>
                    {
                        ////////// slider__description //////////
                    }
                    <div className="slider__description">
                        <p className="m-0" ref={descriptionRef}>
                            A passionate team with a clear goal when releasing
                            new
                            <br />
                            digital products. We want to universalize our
                            clients
                            <br />
                            presence no matter the channel or device.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SliderContactUs;
