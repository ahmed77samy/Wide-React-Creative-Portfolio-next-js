import { useEffect, useRef } from "react";
import {
    onShowAnimation_hide,
    onShowAnimation_showText,
} from "/public/js/OnShowAnimation";

function Subscrib() {
    const formRef = useRef(null);
    const titleRef = useRef(null);

    ////////// animation on show //////////
    useEffect(() => {
        onShowAnimation_showText(formRef.current);
        onShowAnimation_hide(titleRef.current, "var(--black)");
    }, []);
    return (
        <div className="subscrib setup__component">
            <div className="container">
                {
                    ////////// subscrib__title //////////
                }
                <div className="subscrib__title">
                    <span className="label__2">LATEST UPDATES</span>
                    <h2 className="h2__title" ref={titleRef}>
                        SUBSCRIBE US
                    </h2>
                </div>
                {
                    ////////// subscrib__form //////////
                }
                <div className="subscrib__form" ref={formRef}>
                    <input
                        type="text"
                        placeholder="Enter Your Email"
                        className="input__1 input--large"
                    />
                    <button className="button__2 btn--large ml-2">
                        <span className="txt__btn">Purchase Now</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Subscrib;
