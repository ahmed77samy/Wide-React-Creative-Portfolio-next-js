import { useEffect, useRef } from "react";
import { onShowAnimation_showText } from "/public/js/OnShowAnimation";

function ExperienceItem({ data }) {
    const iconRef = useRef(null);
    const titleRef = useRef(null);

    ////////// animation on show //////////
    useEffect(() => {
        onShowAnimation_showText(iconRef.current);
        onShowAnimation_showText(titleRef.current);
    }, []);

    return (
        <div className="experience__item">
            {
                ////////// item__header //////////
            }
            <div className="item__header">
                <span ref={iconRef}>{data.icon}</span>
                <h4 className="text-uppercase" ref={titleRef}>
                    {data.title}
                </h4>
            </div>
        </div>
    );
}

export default ExperienceItem;
