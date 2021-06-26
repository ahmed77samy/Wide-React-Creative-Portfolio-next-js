import { useEffect, useRef } from "react";
import { onShowAnimation_showText } from "/public/js/OnShowAnimation";

function BreakPoint({ data }) {
    const breakpointRef = useRef(null);

    useEffect(() => {
        onShowAnimation_showText(breakpointRef.current);
    }, []);

    return (
        <div className="breakpoint__plan" ref={breakpointRef}>
            <div className="d-flex justify-content-between mb-2">
                <span className="mr-2 icon">{data.icon}</span>
                <h6 className="flex-grow-1 m-0 text-uppercase">{data.title}</h6>
            </div>
            <p className="write--one m-0">{data.description}</p>
        </div>
    );
}

export default BreakPoint;
