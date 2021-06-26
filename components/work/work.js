import { useEffect, useRef } from "react";
import { onShowAnimation_hide } from "/public/js/OnShowAnimation";

import { worklist } from "/public/js/work";
import WorkItem from "./item";

function Work() {
    const titleRef = useRef(null);

    ////////// filter worklist //////////
    const filterlist = worklist.filter((e, i) => {
        return i > worklist.length - 1 - 3;
    });

    ////////// animation on show //////////
    useEffect(() => {
        onShowAnimation_hide(titleRef.current, "var(--black)");
    }, []);

    return (
        <div className="work setup__component">
            <div className="container">
                <div>
                    <span className="label__2">our work</span>
                    <h2 className="h2__title" ref={titleRef}>
                        Latest product
                    </h2>
                </div>
                {
                    ////////// work__list //////////
                }
                <div className="work__list">
                    {filterlist.map((e, i) => {
                        return <WorkItem data={e} key={i} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default Work;
