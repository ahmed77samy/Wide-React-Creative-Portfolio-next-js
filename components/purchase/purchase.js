import { useEffect, useRef } from "react";
import {
    onShowAnimation_hide,
    onShowAnimation_Writer,
} from "/public/js/OnShowAnimation";
import SplitText from "/public/js/SplitText";
import { FaArrowRight } from "react-icons/fa";

function Purchase() {
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);

    ////////// animation on show //////////
    useEffect(() => {
        const spliter = new SplitText(descriptionRef.current);
        spliter.split();

        onShowAnimation_hide(titleRef.current, "var(--sub)");
        onShowAnimation_Writer(descriptionRef.current, spliter);
    });

    return (
        <div className="purchase">
            {
                ////////// purchase__details //////////
            }
            <div className="purchase__details setup__component d-flex align-items-center">
                <div className="container">
                    {
                        ////////// purchase__title //////////
                    }
                    <div className="purchase__title">
                        <span className="label__2">Let's go now</span>
                        <h2 className="h2__title" ref={titleRef}>
                            we are hiring
                        </h2>
                    </div>
                    {
                        ////////// purchase__info //////////
                    }
                    <div className="purchase__info">
                        <p ref={descriptionRef}>
                            Exclusively only on ThemeForest, grab your copy
                            right now.Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since
                            the 1500s
                        </p>
                        <button className="button__1">
                            <span className="before__btn">
                                <FaArrowRight />
                            </span>
                            <span className="txt__btn">Purchase Now</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Purchase;
