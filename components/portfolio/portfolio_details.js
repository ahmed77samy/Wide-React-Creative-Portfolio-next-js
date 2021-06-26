import { useEffect, useRef } from "react";
import {
    onShowAnimation_hide,
    onShowAnimation_showText,
} from "/public/js/OnShowAnimation";

function PortfolioDetails({ data, id }) {
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);

    ////////// animation on show //////////
    useEffect(() => {
        onShowAnimation_showText(descriptionRef.current);
        onShowAnimation_hide(titleRef.current, "var(--black)");
    }, [id]);

    return (
        <div className="portfoliodetails setup__component">
            <div
                className="container d-flex flex-column"
                style={{ rowGap: "var(--px50)" }}>
                {
                    ////////// portfolio__details //////////
                }
                <div className="portfolio__details">
                    <span className="label__2">for big details</span>
                    <h2 className="h2__title mx-auo" ref={titleRef}>
                        details project
                    </h2>
                    <p className="write--one m-0" ref={descriptionRef}>
                        {data.fulldescription}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PortfolioDetails;
